import { Component } from "react";
import "../../Assets/Style/Components/Blocks/_Facts.scss";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
class Facts extends Component {
  render() {
    return (
      <div className="Facts">
        <Container>
          <div className="Facts1">
            <div className="fact-word">Facts</div>

            <div class="grid-container">
              <div className="Facts-num">
                <h2>23</h2>
                {/* <h6></h6> */}
                <div className="FactsParagraphContainer">
                  {" "}
                  <p>
                    Years of experience in field of packaging & disposables.
                  </p>
                </div>
              </div>
              <div className="Facts-num">
                <h2>22</h2>
                {/* <h6></h6> */}
                <div className="FactsParagraphContainer">
                  {" "}
                  <p>Export countries.</p>
                </div>
              </div>
              <div className="Facts-num">
                <h2>20,000</h2>
                {/* <h6></h6> */}
                <div className="FactsParagraphContainer">
                  {" "}
                  <p>sqm (215,000 square foot) Production facility.</p>
                </div>
              </div>
              <div className="Facts-num">
                <h2>2300</h2>
                {/* <h6></h6> */}
                <div className="FactsParagraphContainer">
                  {" "}
                  <p>Items</p>
                </div>
              </div>
              <div className="Facts-num">
                <h2>185</h2>
                {/* <h6></h6> */}
                <div className="FactsParagraphContainer">
                  {" "}
                  <p>Employees ( Females & Males)</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
export default Facts;
