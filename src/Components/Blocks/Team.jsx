import { Component } from "react";
import "../../Assets/Style/Components/Blocks/_Team.scss";
import Container from "react-bootstrap/Container";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// react-multi-carousel Properties start
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1199, min: 775 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 774, min: 425 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  smallMobile: {
    breakpoint: { max: 424, min: 0 },
    items: 2,
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
// react-multi-carousel Properties End
class Team extends Component {
  render() {
    return (
      <div className="Team">
        <Container>
          {/* Team Word Title Start */}
          <div className="Team-text-container">
            <div>
              <span></span>
              <h6>TEAM</h6>
            </div>
          </div>
           {/* Team Word Title End */}
           {/* react-multi-carousel Start */}
          <div className="Carousel">
            <Carousel
              showDots={false}
              responsive={responsive}
              infinite={true}
              autoPlay={false}
              autoPlaySpeed={3000}
            >
              <div className="CarouselItemContainer">
                {" "}
                <img className="CarouselItem" src="images/tea1.png" />
                <div className="name-job-title">
                  {/* <span></span> */}
                  <h4 className="MemberName">Mohammad Dokh</h4>
                  <h6>President - CEO</h6>
                  <h6 className="h6-email">sales@alhadaf-int.com</h6>
                </div>
              </div>
              <div className="CarouselItemContainer">
                {" "}
                <img className="" src="images/tea6.png" />
                <div className="name-job-title">
                  {/* <span></span> */}
                  <h4 className="MemberName">Mohammad Dokh</h4>
                  <h6>President - CEO</h6>
                  <h6 className="h6-email">sales@alhadaf-int.com</h6>
                </div>
              </div>
              <div className="CarouselItemContainer">
                {" "}
                <img className="" src="images/tea3.png" />
                <div className="name-job-title">
                  {/* <span></span> */}
                  <h4 className="MemberName">Mohammad Dokh</h4>
                  <h6>President - CEO</h6>
                  <h6 className="h6-email">sales@alhadaf-int.com</h6>
                </div>
              </div>
              <div className="CarouselItemContainer">
                {" "}
                <img className="" src="images/tea4.png" />
                <div className="name-job-title">
                  {/* <span></span> */}
                  <h4 className="MemberName">Mohammad Dokh</h4>
                  <h6>President - CEO</h6>
                  <h6 className="h6-email">sales@alhadaf-int.com</h6>
                </div>
              </div>
              <div className="CarouselItemContainer">
                {" "}
                <img className="" src="images/tea5.png" />
                <div className="name-job-title">
                  {/* <span></span> */}
                  <h4 className="MemberName">Mohammad Dokh</h4>
                  <h6>President - CEO</h6>
                  <h6 className="h6-email">sales@alhadaf-int.com</h6>
                </div>
              </div>
              <div className="CarouselItemContainer">
                {" "}
                <img className="" src="images/tea4.png" />
                <div className="name-job-title">
                  {/* <span></span> */}
                  <h4 className="MemberName">Mohammad Dokh</h4>
                  <h6>President - CEO</h6>
                  <h6 className="h6-email">sales@alhadaf-int.com</h6>
                </div>
              </div>
              <div className="CarouselItemContainer">
                {" "}
                <img className="" src="images/tea5.png" />
                <div className="name-job-title">
                  {/* <span></span> */}
                  <h4 className="MemberName">Mohammad Dokh</h4>
                  <h6>President - CEO</h6>
                  <h6 className="h6-email">sales@alhadaf-int.com</h6>
                </div>
              </div>
            </Carousel>
          </div>
          {/* react-multi-carousel End */}
        </Container>
      </div>
    );
  }
}
export default Team;
