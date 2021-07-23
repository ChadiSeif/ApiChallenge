import React from "react";
import { Card } from "react-bootstrap";

const PostComment = ({ com }) => {
  console.log(com);
  const style = {
    display: "flex",
    flexWrap: "wrap",
    margin: 10,
    width: "18rem",
  };

  return (
    <div>
      <Card style={style}>
        <Card.Body>
          <Card.Title>{com.title}</Card.Title>

          <Card.Text>{com.body}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PostComment;
