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
              <Col lg={6} md={6} sm={6}>
                <div className="CoppyRights">
                  © RZ Company - All rights Reserved
                </div>
              </Col>
              <Col lg={6} md={6} sm={6} className="CoppyRightsLinksOuter">
                <div className="CoppyRightsLinksFooter">
                  <ul>
                    <li><a target="_blank" href="https://maps.google.com/maps?ll=31.954441,35.838752&z=14&t=m&hl=en-US&gl=JO&mapclient=embed&daddr=RZ%20Showroom%20-%20bayader%20Amman@31.9544415,35.8387515">Bayader</a></li>
                    <li><a target="_blank" href="https://maps.google.com/maps?ll=31.996825,35.847119&z=16&t=m&hl=en-US&gl=SA&mapclient=embed&daddr=RZ%20SHOWROOM-%20Khalda%20Wasfi%20At-Tall%20St.%20Amman%20Jordan@31.9968246,35.847119">Khalda</a></li>
                    <li><a target="_blank" href="https://maps.google.com/maps?ll=32.00113,35.942982&z=12&t=m&hl=en&gl=JO&mapclient=embed&daddr=RZ%20SHOWROOM%20-%20Tabarbour%20Sadr%20Al-Shahid%20St.%20Amman@32.0011304,35.9429821">Tabrbour</a></li>                  
                  </ul>
                </div>
              </Col>

            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Footer;
