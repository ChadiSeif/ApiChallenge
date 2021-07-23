import axios from "axios";
import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import "./Home.css";

const Home = () => {
  const [Users, setUsers] = useState([]);

  const URL = "https://jsonplaceholder.typicode.com/users";
  console.log(Users);
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  // const getUsers = async () => {
  //   try {
  //     const res = await axios.get(URL);
  //     setUsers(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getUsers();
  // }, []);

  return (
    <div className="Users">
      {Users.map((user, i) => (
        <div>
          <UserCard key={user.id} user={user} />
        </div>
      ))}
    </div>
  );
};

export default Home;
