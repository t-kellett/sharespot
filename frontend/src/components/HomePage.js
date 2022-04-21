import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import {BrowserRouter as Router, Link, Redirect, Routes, Route} from "react-router-dom";

export default class HomePage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<div><p>This is the home page</p></div>} />
          <Route path="/join" element={<RoomJoinPage />} />
          <Route path="/create-room" element={<CreateRoomPage />} />
        </Routes>
      </Router>
    );
  }
}