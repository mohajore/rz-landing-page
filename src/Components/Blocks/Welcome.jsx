import { Component } from "react";
import "../../Assets/Style/Components/Blocks/_welcome.scss";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { IoIosArrowForward } from "react-icons/io";

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <Container>
          <div className="Welcome1">
            <Row>
               {/* Wlecome Intoduction section start */}
              <Col xl={6} lg={6} md={6} sm={12}>
                <div className="welcome-titles-container">
                  <h2 className="">WELCOME TO RZ</h2>
                  <div className="welcome-h5-container">
                    <h5>THE WOLRD OF DISPOSABLE AND PACKAGING</h5>
                  </div>
                  <div className="welcome-shop-now-btn-container">
                    <span className="BtnName">SHOP NOW </span>
                    <span className="BtnIcon">
                      {" "}
                      <IoIosArrowForward className="IoIosArrowForward" />
                    </span>
                  </div>
                </div>
              </Col>
              {/* Wlecome Intoduction section End */}
              {/* Wlecome image section start */}
              <Col xl={6} lg={6} md={6} sm={12}>
                {" "}
                <div className="welcome-img-container">
                  {" "}
                  <img className="" src="images/building1.jpg" />{" "}
                </div>{" "}
              </Col>
               {/* Wlecome image section End */}
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Welcome;
