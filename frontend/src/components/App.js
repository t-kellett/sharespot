import React, { Component } from "react";
import { render } from "react-dom";
import { createRoot } from "react-dom/client";
import HomePage from "./HomePage";


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( 
        <HomePage />
    );
  }
}

// this is the new React but couldn't get it working for some reason:
const appDiv = document.getElementById('app');
const root = createRoot(appDiv); // createRoot(container!) if you use TypeScript
root.render(<App />);

// const appDiv = document.getElementById("app");
// render(<App />, appDiv);