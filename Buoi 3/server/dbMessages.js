import mongoose from "mongoose";

const messagingSchema = new mongoose.Schema({
  message: String,
  name: String,
  timestamp: String,
  received: Boolean,
});

const MessagingMessage = mongoose.model("MessagingMessage", messagingSchema);

export default MessagingMessage;
