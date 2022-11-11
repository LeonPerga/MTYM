import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./Homepage";
import { Container } from "react-bootstrap";
import background from "../../Images/background.jpg"
import "core-js/stable";
import "regenerator-runtime/runtime";



export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div id = "background" style={{ background: `url(${background})` }}     class="container-fluid remove-all-margin-padding" dir= "rtl" >
          <HomePage />

        </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);