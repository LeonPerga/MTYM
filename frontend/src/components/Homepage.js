import React, { Component } from "react";
import Login from "./Login";
import Signup from "./Signup";
import ImageSlider from "./ImageSlider";
import CustomOrder from "./CustomOrder";
import CustomNavbar from "./Navbar";
import AuthService from "../context/AuthService";
import Footer from "./Footer";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Routes,
} from "react-router-dom";
import { Container , Card, img} from "react-bootstrap";
import Profile from "./Profile";

class AboutUs extends Component {
    render() { 
      return(
        <div id="about-us" class="container">
            לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.
        </div>

    )
  }
}
class Home extends Component {
  render() { 
    return(
      <Container>
        <Container>
          {/* <ImageSlider/> */}
        </Container>
      </Container>

  );
}
}
export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Router>
        <CustomNavbar/>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/custom/" element={<CustomOrder />} />   
          <Route path="/profile" element={<Profile />} />   
        </Routes>
        {/* <Footer/> */}
      </Router>
    );
  }
}