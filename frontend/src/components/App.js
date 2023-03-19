import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./Homepage";
import { Container } from "react-bootstrap";
import background from "../../Images/background.jpg"
import "core-js/stable";
import "regenerator-runtime/runtime";
import { Provider } from "react-redux";
import store from "./store";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <Provider store={store}>
        <div id = "background" style={{ background: `url(${background})` }}     class="container-fluid remove-all-margin-padding" dir= "rtl" >
          <HomePage />
        </div>

      // </Provider>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);