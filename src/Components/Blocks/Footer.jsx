import { Component } from "react";
import "../../Assets/Style/Components/Blocks/_Footer.scss";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <Container>
          <div className="Footer1">
            <Row>
              <div className="CoppyRights">
                © RZ Company - All rights Reserved
              </div>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Footer;
