import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Messages from "./dbMessages.js";
import Pusher from "pusher";

// App Config
const app = express();
const port = process.env.PORT || 9000;
const connection_url =
  "mongodb+srv://khoa:khoa@cluster0.8pauvfy.mongodb.net/messaging?retryWrites=true&w=majority";

const pusher = new Pusher({
  appId: "1727571",
  key: "41aba34c80ebb3b18bf2",
  secret: "e90da2322c34f61854a1",
  cluster: "ap1",
  useTLS: true,
});

// Middleware
app.use(express.json());
app.use(cors());

// DB Config
try {
  mongoose.connect(connection_url);
  console.log("Database connected");
} catch (error) {
  throw error;
}

const db = mongoose.connection;

db.once("open", () => {
  console.log("DB Connected");
  const msgCollection = db.collection("messagingmessages");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    console.log(change);
    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received,
      });
    } else {
      console.log("Error triggering Pusher");
    }
  });
});

// API Endpoints

app.get("/", (req, res) => res.status(200).send("Hello UIT guy"));

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;
  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// Listener
app.listen(port, () => console.log(`Listening on localhost:${port}`));
