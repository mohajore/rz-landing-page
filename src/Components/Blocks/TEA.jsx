import { Component } from "react";
import "../../Assets/Style/Components/Blocks/_TEA.scss";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { IoIosArrowForward } from "react-icons/io";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return <button onClick={() => onClick()} />;
};
class TEA extends Component {
  render() {
    return (
      <div className="TEA">
        <Container>
          <div className="About-text-container">
            <div>
              <span></span>
              <h6>TEA</h6>
            </div>
          </div>
        </Container>
        <div className="Carousel">
          <Carousel
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
          >
            <div>
              {" "}
              <img className="CarouselItem" src="images/tea1.png" />
              <div className="name-job-title">
                <h4>Mohammad Dokh</h4>
                <h6>President - CEO</h6>
              </div>
            </div>
            <div>
              {" "}
              <img className="" src="images/tea6.png" />
            </div>
            <div>
              {" "}
              <img className="" src="images/tea3.png" />
            </div>
            <div>
              {" "}
              <img className="" src="images/tea4.png" />
            </div>
            <div>
              {" "}
              <img className="" src="images/tea5.png" />
            </div>
            <div>
              {" "}
              <img className="" src="images/tea4.png" />
            </div>
            <div>
              {" "}
              <img className="" src="images/tea5.png" />
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default TEA;
