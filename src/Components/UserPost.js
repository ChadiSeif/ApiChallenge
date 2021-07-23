import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const UserPost = ({ post }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>

          <Card.Text>{post.body}</Card.Text>

          <Link to={{ pathname: "/Comments", state: { post } }}>Comments</Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserPost;
