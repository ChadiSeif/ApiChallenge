import React, { useState, useEffect } from "react";
import axios from "axios";
import PostComment from "./PostComment";
const Comment = ({ location }) => {
  const postuser = location.state.post;
  const [comment, setComment] = useState([]);
  const numberofcomments = comment.length;
  console.log(numberofcomments);

  const URL = `https://jsonplaceholder.typicode.com/comments/?postId=${postuser.id}`;

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => setComment(res.data))
      .catch((err) => console.log(err));
  }, [URL]);

  return (
    <div>
      <h3 style={{ backgroundColor: "white", margin: 10 }}>
        Number of comments is :{numberofcomments}{" "}
      </h3>
      <div>
        {comment.map((com) => (
          <PostComment com={com} />
        ))}
      </div>
    </div>
  );
};

export default Comment;
