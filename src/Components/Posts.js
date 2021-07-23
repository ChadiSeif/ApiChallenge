import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Posts.css";
import UserPost from "./UserPost";

const Posts = (props) => {
  console.log(props);
  const postuser = props.location.state.user;

  const [posts, setPosts] = useState([]);

  const URL = `https://jsonplaceholder.typicode.com/posts/?userId=${postuser.id}`;

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, [URL]);
  return (
    <div>
      <h2>{postuser.name}</h2>

      <div className="userpost">
        {posts.map((post) => (
          <div>
            <UserPost post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
