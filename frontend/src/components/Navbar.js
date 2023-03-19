import React, { Component } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  input,
  form,
  img,
} from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default class CustomNavbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav
          // id="navbar"
          // sticky="top"
          class="navbar navbar-expand-lg  navbar-dark text-center "
        >
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              <img id="logo" src="https://i.imgur.com/nvxOZ3f.png " />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav nav-fill w-40">
                <li class="nav-item active px-2">
                  <a class="nav-link" href="#gallery">
                    <font face="Assistant" size="+3.5">
                      גלרייה
                    </font>{" "}
                    <span class="sr-only"></span>
                  </a>
                </li>
                <li class="nav-item px-2">
                  <a class="nav-link" href="/login">
                    <font face="Assistant" size="+3.5">
                      איזור אישי
                    </font>{" "}
                  </a>
                </li>
                <li class="nav-item dropdown px-2">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <font face="Assistant" size="+3.5">
                      הזמנות
                    </font>
                  </a>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a class="dropdown-item" href="#">
                      הזמנה רגילה
                    </a>
                    <a class="dropdown-item" href="/custom">
                      הזמנה מיוחדת
                    </a>
                  </div>
                </li>
              </ul>
              <ul class="navbar-nav ms-auto nav-fill w-40 d-flex" style={{display:"flex",justifyContent: "flex-end"}}>
                <li class="nav-item active px-2" >
                  <a
                    id="phone-number"
                    class="nav-link text-nowrap"
                    href="tel:0502422047"
                  >
                    <font size="+4"> 050-2422047</font>{" "}
                    <span class="sr-only"></span>
                    <span id="small-phone">
                      <img src="" class="small-image"></img>
                    </span>
                  </a>
                </li>
                <li class="nav-item active px-2">
                  <a
                    class="nav-link"
                    href="https://www.facebook.com/mtym.info"
                    target="_blank"
                  >
                    <img
                      src="https://i.imgur.com/2ZgDNVo.png"
                      class="small-fb-logo"
                    ></img>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
