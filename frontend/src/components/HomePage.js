import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import {Grid, Button, ButtonGroup, Typography } from "@mui/material"
import {BrowserRouter as Router, Link, Navigate, Routes, Route} from "react-router-dom";
import { Box } from "@mui/system";

export default class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      roomCode: null
    }
  }

  async componentDidMount () {
    fetch('/api/user-in-room')
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        roomCode: data.code
      })})
  }

  renderHomePage = () => {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} align="center" >
          <Typography variant="h3" compact="h3">
            Sharespot
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <ButtonGroup variant="contained" color="primary">
            <Button color="primary" component={Link} to="/join" >
              Join a Room
            </Button>
            <Button color="secondary" component={ Link } to="/create-room" >
              Create a Room
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>

      
    );
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={this.state.roomCode ? (<Navigate replace to={`/room/${this.state.roomCode}`} />) : this.renderHomePage()} />
          <Route path="/join" element={<RoomJoinPage />} />
          <Route path="/create-room" element={<CreateRoomPage />} />
        </Routes>
      </Router>
    );
  }
}