import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Components/Home";

import Comment from "./Components/Comment";
import Posts from "./Components/Posts";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/Posts"} component={Posts} />
        {/* <Route exact path={"/Posts"} render={(props) => <Posts {...props} />} /> */}
        {/* <Route
          exact
          path={"/Posts/:id"}
          render={(rest) => <Posts {...rest} />}
        /> */}
        <Route exact path={"/Comments"} component={Comment} />
      </Switch>
    </div>
  );
}

export default App;
