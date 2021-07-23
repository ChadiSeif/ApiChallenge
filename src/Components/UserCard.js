import React from "react";
import "./UserCard.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  console.log(`usercard ${user}`);
  return (
    <div style={{ margin: 10 }}>
      <Link to={{ pathname: "/Posts", state: { user } }}>
        {/* <Link to={`/Posts/${user.id}`}> */}
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/768px-User_icon_2.svg.png"
          />
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>{user.email}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default UserCard;
