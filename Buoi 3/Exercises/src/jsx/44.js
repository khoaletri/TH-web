import React from "react";
import ReactDOM from "react-dom";
import { Card, Avatar } from "antd";
import "antd/dist/reset.css";

const { Meta } = Card;

const card = {
  title: "Elon Musk",
  description:
    "Elon Reeve Musk FRS is a business magnate, industrial designer, and engineer. He is the founder, CEO, CTO, and chief designer of SpaceX",
  avatar: "http://www.gstatic.com/tv/thumb/persons/487130/487130_v9_bb.jpg",
  cover:
    "https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk-1100x733.jpg",
};

const element = (
  <div>
    <Card
      style={{ width: 300 }}
      cover={<img alt="Elon Musk" src={card.cover} />}
    >
      <Meta
        avatar={<Avatar src={card.avatar} />}
        title={card.title}
        description={card.description}
      />
    </Card>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
