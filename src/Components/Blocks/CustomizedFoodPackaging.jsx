import { Component } from "react";
import "../../Assets/Style/Components/Blocks/_CustomizedFoodPackaging.scss";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class CustomizedFoodPackaging extends Component {
  render() {
    return (
      <div className="CustomizedFoodPackaging">
        <Container>
          <div className="UnderContainerCustomizedFoodPackaging">
            <div className="CustomizedFoodPackagingTitle">
              <span></span>
              <h5>Do you need your own customized food packaging products?</h5>
            </div>
            <div className="CustomizedFoodPackagingTwoTitles">
              <div className="TwoTitles">
                <div className="title btn">
                  <h5>CONTACT VIA WHATSAPP</h5>
                </div>
                <div className="title btn ">
                  <h5>CALL US</h5>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default CustomizedFoodPackaging;
