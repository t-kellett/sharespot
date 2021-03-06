import React, { Component, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import {Button, Grid, Typography, TextField, FormHelperText, FormControl, Radio, RadioGroup, FormControlLabel} from "@mui/material"

const CreateRoomPage = (props) => {
  const defaultVotes = 2;
  const [guestCanPause, setGuestCanPause] = useState(true);
  const [votesToSkip, setVotes] = useState(2);



  handleVotesChange = (e) => {
    this.setVotes(e.target.value);
  }

  handleGuestCanPauseChange = (e) => {
    this.setGuestCanPause(e.target.value === 'true' ? true : false);
  }

  handleRoomButtonPressed = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type' : 'application/json' },
      body: JSON.stringify({
        votes_to_skip: this.state.votesToSkip,
        guest_can_pause: this.state.guestCanPause,
      }),
    };
    fetch('/api/create-room', requestOptions)
    .then((response) => response.json())
    .then((data) => useNavigate("/room/" + data.code));
  }
    return (
    <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <Typography element="h4" variant="h4">
            Create A Room
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <FormControl element="fieldset">
            <FormHelperText element="div" align="center">
              Guest Control of Playback State
            </FormHelperText>
            <RadioGroup
              row
              defaultValue="true"
              onChange={this.handleGuestCanPauseChange}
            >
              <FormControlLabel
                value="true"
                control={<Radio color="primary" />}
                label="Play/Pause"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="false"
                control={<Radio color="secondary" />}
                label="No Control"
                labelPlacement="bottom"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} align="center">
          <FormControl>
            <TextField
              required={true}
              type="number"
              onChange={handleVotesChange(e)}
              defaultValue={defaultVotes}
              inputProps={{
                min: 1,
                style: { textAlign: "center" },
              }}
            />
            <FormHelperText>
              <div align="center">Votes Required To Skip Song</div>
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} align="center">
          <Button
            color="primary"
            variant="contained"
            onClick={handleRoomButtonPressed}
          >
            Create A Room
          </Button>
        </Grid>
        <Grid item xs={12} align="center">
          <Button color="secondary" variant="contained" component={Link} to="/" >
            Back
          </Button>
        </Grid>
      </Grid>
    );
}

export default CreateRoomPage;