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
                  <h4 className="MemberName">Rami Saheb </h4>
                  <h6>President - CEO</h6>
                  <h6 className="h6-email"></h6>
                </div>
              </div>
              <div className="CarouselItemContainer">
                {" "}
                <img className="" src="images/tea6.png" />
                <div className="name-job-title">
                  {/* <span></span> */}
                  <h4 className="MemberName">Zaid Al Saheb</h4>
                  <h6>Vice President / Sales Director </h6>
                  <h6 className="h6-email">sales@alhadaf-int.com</h6>
                </div>
              </div>
              <div className="CarouselItemContainer">
                {" "}
                <img className="" src="images/tea3.png" />
                <div className="name-job-title">
                  {/* <span></span> */}
                  <h4 className="MemberName">Mohammad Zreekat</h4>
                  <h6>Wholesales Manager</h6>
                  <h6 className="h6-email">sales.manager@rz.jo</h6>
                </div>
              </div>
              <div className="CarouselItemContainer">
                {" "}
                <img className="" src="images/tea4.png" />
                <div className="name-job-title">
                  {/* <span></span> */}
                  <h4 className="MemberName">Falah Hafnawi</h4>
                  <h6>Export Manager</h6>
                  <h6 className="h6-email">export@alhadaf-int.com</h6>
                </div>
              </div>
              <div className="CarouselItemContainer">
                {" "}
                <img className="" src="images/tea5.png" />
                <div className="name-job-title">
                  {/* <span></span> */}
                  <h4 className="MemberName">Hasan Zaid</h4>
                  <h6>Production Manager </h6>
                  <h6 className="h6-email">production.manager@rz.jo</h6>
                </div>
              </div>
              <div className="CarouselItemContainer">
                {" "}
                <img className="" src="images/tea3.png" />
                <div className="name-job-title">
                  {/* <span></span> */}
                  <h4 className="MemberName">Muneer Shukokani</h4>
                  <h6>QC Consultant</h6>
                  <h6 className="h6-email">qc@alhadaf-int.com</h6>
                </div>
              </div>
              <div className="CarouselItemContainer">
                {" "}
                <img className="" src="images/tea2.png" />
                <div className="name-job-title">
                  {/* <span></span> */}
                  <h4 className="MemberName">Samar Rawashdeh</h4>
                  <h6>Local Purchasing Supervisor</h6>
                  <h6 className="h6-email">office@alhadaf-int.com</h6>
                </div>
              </div>
              <div className="CarouselItemContainer">
                {" "}
                <img className="CarouselItem" src="images/tea1.png" />
                <div className="name-job-title">
                  {/* <span></span> */}
                  <h4 className="MemberName">Eman Misk </h4>
                  <h6>Head of Accounting</h6>
                  <h6 className="h6-email">info@alhadaf-int.com</h6>
                </div>
              </div>
              <div className="CarouselItemContainer">
                {" "}
                <img className="" src="images/tea6.png" />
                <div className="name-job-title">
                  {/* <span></span> */}
                  <h4 className="MemberName">Deena Esbieh</h4>
                  <h6>HR Manager </h6>
                  <h6 className="h6-email">hr@rz.jo</h6>
                </div>
              </div>
              <div className="CarouselItemContainer">
                {" "}
                <img className="" src="images/tea3.png" />
                <div className="name-job-title">
                  {/* <span></span> */}
                  <h4 className="MemberName">Sheghaf Kafaween</h4>
                  <h6>CRM Manager</h6>
                  <h6 className="h6-email">crm@rz.jo</h6>
                </div>
              </div>
              <div className="CarouselItemContainer">
                {" "}
                <img className="" src="images/tea4.png" />
                <div className="name-job-title">
                  {/* <span></span> */}
                  <h4 className="MemberName">Kawther Abdullah</h4>
                  <h6>R & D Supervisor</h6>
                  <h6 className="h6-email">rd@rz.jo</h6>
                </div>
              </div>
              <div className="CarouselItemContainer">
                {" "}
                <img className="" src="images/tea5.png" />
                <div className="name-job-title">
                  {/* <span></span> */}
                  <h4 className="MemberName">Motaz Ghneim</h4>
                  <h6>Showrooms Sales Manager</h6>
                  <h6 className="h6-email">retail_shop@rz.jo</h6>
                </div>
              </div>
              <div className="CarouselItemContainer">
                {" "}
                <img className="" src="images/tea3.png" />
                <div className="name-job-title">
                  {/* <span></span> */}
                  <h4 className="MemberName">Fadia Bdour</h4>
                  <h6>Importing Supervisor</h6>
                  <h6 className="h6-email">imp-exp@alhadaf-int.com</h6>
                </div>
              </div>
              <div className="CarouselItemContainer">
                {" "}
                <img className="" src="images/tea2.png" />
                <div className="name-job-title">
                  {/* <span></span> */}
                  <h4 className="MemberName">Rana Obied </h4>
                  <h6>Marketing Manager</h6>
                  <h6 className="h6-email">marketing.manager@rz.jo</h6>
                </div>
              </div>
              <div className="CarouselItemContainer">
                {" "}
                <img className="" src="images/tea2.png" />
                <div className="name-job-title">
                  {/* <span></span> */}
                  <h4 className="MemberName">Baker Saleh </h4>
                  <h6>Warehouse Manager</h6>
                  <h6 className="h6-email">Warehouse@rz.jo</h6>
                </div>
              </div>
              <div className="CarouselItemContainer">
                {" "}
                <img className="" src="images/tea2.png" />
                <div className="name-job-title">
                  {/* <span></span> */}
                  <h4 className="MemberName">Ramzi Bukhari </h4>
                  <h6>Financial Advisor</h6>
                  <h6 className="h6-email">info@alhadaf-int.com</h6>
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
