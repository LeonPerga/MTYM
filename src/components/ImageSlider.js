import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import { Container, img } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const image_directory = "../../Images"

export default class ImageSlider extends Component {
    render() {
      return (
        <Container>
        <div id="image-slider" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#image-slider" data-slide-to="0" class="active"></li>
            <li data-target="#image-slider" data-slide-to="1"></li>
            <li data-target="#image-slider" data-slide-to="2"></li>
          </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src=   "https://i.imgur.com/14wt30f.jpg" alt="First slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://i.imgur.com/Lfbeqa7.jpg" alt="Second slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://i.imgur.com/AP1oANa.jpg" alt="Third slide"/>
          </div>
        </div>
        <a class="carousel-control-prev" href="#image-slider" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only"></span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only"></span>
  </a>
      </div>
      </Container>
      );
  }
}
