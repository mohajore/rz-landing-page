import { Component } from "react";
import "../../Assets/Style/Components/Blocks/_ourvmcp.scss";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// Our Vision,Mission,Core Values,Policies Class Component
class OurVMCP extends Component {
  render() {
    return (
      <div className="OurVMCP">
        <Container>
          <Row>
            <Col className="OurVMCP-Col" lg={3} md={6} sm={6}>
              <div className="OurVMCP-parent-div">
                <h5>Our Vision</h5>
                <div className="OurVMCP-p-parent">
                  <p>
                    To become one of the biggest companies in the world for food
                    packaging services.{" "}
                  </p>
                </div>
              </div>
            </Col>
            <Col className="OurVMCP-Col" lg={3} md={6} sm={6}>
              <div className="OurVMCP-parent-div">
                <h5>Our Mission</h5>
                <div className="OurVMCP-p-parent">
                  <p>
                    To exceed our customers' expectations in quality, delivery,
                    and cost through continuous improvement and customer
                    interaction
                    <br />
                    Our Core Values: Commitment, credibility, integrity,
                    passion, loyalty, creativity, teamwork, and social
                    responsibility.{" "}
                  </p>
                </div>
              </div>
            </Col>
            <Col className="OurVMCP-Col" lg={3} md={6} sm={6}>
              <div className="OurVMCP-parent-div">
                <h5>Our Core Values</h5>
                <div className="OurVMCP-p-parent">
                  {" "}
                  <p>
                    Commitment, credibility, integrity, passion, loyalty,
                    creativity, teamwork, and social responsibility.{" "}
                  </p>
                </div>
              </div>
            </Col>
            <Col className="OurVMCP-Col" lg={3} md={6} sm={6}>
              <div OurVMCP className="OurVMCP-parent-div">
                <h5>Our Policies</h5>
                <div className="OurVMCP-p-parent">
                  {" "}
                  <p>
                    Sustainability, gender equality, anti-bribery, against
                    corruption, and against racial discrimination.{" "}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default OurVMCP;
