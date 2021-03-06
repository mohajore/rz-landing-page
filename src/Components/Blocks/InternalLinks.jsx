import { Component } from "react";
import "../../Assets/Style/Components/Blocks/_InternalLinks.scss";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
class InternalLinks extends Component {
    render() {
        return (
            <div className="InternalLinks">
                <Container>
                    <Row>
                        {/* InternalLink Section Start  */}
                        <Col md={2} sm={3} xs={6}>
                            <div className="InternalLink">
                                <h4>HOME</h4>
                                <span></span>
                                <h6 className="FirstHeader">
                                    <a href="#">About US</a>
                                </h6>
                                <h6>
                                    {" "}
                                    <a href="#">Contact</a>
                                </h6>
                                <h6>
                                    {" "}
                                    <a href="#">Company News</a>
                                </h6>
                                <h6>
                                    {" "}
                                    <a href="#">Team</a>
                                </h6>
                            </div>
                        </Col>
                        <Col md={2} sm={3} xs={6}>
                            <div className="InternalLink">
                                <h4>GALLERY</h4>
                                <span></span>
                                <h6 className="FirstHeader">
                                    {" "}
                                    <a href="#">All</a>
                                </h6>
                                <h6>
                                    {" "}
                                    <a href="#">Showrooms</a>
                                </h6>
                                <h6>
                                    {" "}
                                    <a href="#">Social Responsibility</a>{" "}
                                </h6>
                                <h6>
                                    {" "}
                                    <a href="#">Events</a>
                                </h6>
                                <h6>
                                    {" "}
                                    <a href="#">Company</a>
                                </h6>
                                <h6>
                                    {" "}
                                    <a href="#">Videos</a>
                                </h6>
                            </div>
                        </Col>
                        <Col md={2} sm={3} xs={6}>
                            <div className="InternalLink">
                                <h4>MORE</h4>
                                <span></span>
                                <h6 className="FirstHeader">
                                    {" "}
                                    <a href="#">Store Location</a>{" "}
                                </h6>
                                <h6>
                                    <a href="#">FAQ</a>{" "}
                                </h6>
                                <h6>
                                    <a href="#">Installment Plans</a>{" "}
                                </h6>
                                <h6>
                                    <a href="#">Terms of Service</a>{" "}
                                </h6>
                                <h6>
                                    <a href="#">Refund policy</a>{" "}
                                </h6>
                            </div>
                        </Col>
                        <Col md={2} sm={3} xs={6}>
                            <div className="InternalLink">
                                <h4>Location</h4>
                                <span></span>
                                <h6 className="FirstHeader">
                                    <a target="_blank" href="https://maps.google.com/maps?ll=31.954441,35.838752&z=14&t=m&hl=en-US&gl=JO&mapclient=embed&daddr=RZ%20Showroom%20-%20bayader%20Amman@31.9544415,35.8387515">Byader</a>{" "}
                                </h6>
                                <h6>
                                    <a target="_blank" href="https://maps.google.com/maps?ll=31.996825,35.847119&z=16&t=m&hl=en-US&gl=SA&mapclient=embed&daddr=RZ%20SHOWROOM-%20Khalda%20Wasfi%20At-Tall%20St.%20Amman%20Jordan@31.9968246,35.847119">Khalda</a>{" "}
                                </h6>
                                <h6>
                                    <a target="_blank" href="https://maps.google.com/maps?ll=32.00113,35.942982&z=12&t=m&hl=en&gl=JO&mapclient=embed&daddr=RZ%20SHOWROOM%20-%20Tabarbour%20Sadr%20Al-Shahid%20St.%20Amman@32.0011304,35.9429821">Tabrbour</a>{" "}
                                </h6>
                            </div>
                        </Col>
                        <Col className="InternalLinkBlank" md={2} sm={3} xs={6}>
                            <div className="InternalLink"></div>
                        </Col>
                        {/* InternalLink Section End  */}
                        {/* Logo with SocialMedia Icons Start */}
                        <Col xl={2} md={4} sm={3} xs={6}>
                            <div className="InternalLinkLast">
                                <div>
                                    <img src="../../images/logo.png" alt="logo" />
                                </div>

                                <div className="header-icons-div">
                                   

                                    {/* {<FaLinkedinIn className="mx-2  header-icons" />}
                  {<FaTwitter className="mx-2  header-icons" />}
                  {<FaInstagram className="mx-2  header-icons" />}
                  {<FaFacebookF className="mx-2  header-icons" />} */}
                                </div>
                            </div>
                        </Col>
                        {/* Logo with SocialMedia Icons End */}
                    </Row>
                </Container>
                {/* Logo with SocialMedia Icons Start [Tablet]  */}
                <Row>
                    <div>
                        <div className="InternalLinkLast1">
                            <div>
                                <img src="../../images/logo.png" alt="logo" />
                            </div>
         
                        </div>
                    </div>
                </Row>
                {/* Logo with SocialMedia Icons End [Tablet]  */}
            </div>
        );
    }
}
export default InternalLinks;
