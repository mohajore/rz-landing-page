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
                                    <a href="#">Byader</a>{" "}
                                </h6>
                                <h6>
                                    <a href="#">Khalda</a>{" "}
                                </h6>
                                <h6>
                                    <a href="#">Tabrbour</a>{" "}
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
                                    {this.props.social.map(({ title }) => {
                                        return <div className="SocialIcon">{title == "facebook" ? <FaFacebookF size={20} className="mx-2  header-icons" /> : title == "instagram" ? <FaInstagram size={20} className="mx-2  header-icons" /> : title == "linkedIn" ? <FaLinkedinIn size={20} className="mx-2  header-icons" /> : title == "Twitter" ? <FaTwitter size={20} className="mx-2  header-icons" /> : null}</div>;
                                    })}

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
                            <div className="header-icons-div">
                                {<FaLinkedinIn className="mx-2  header-icons" />}
                                {<FaTwitter className="mx-2  header-icons" />}
                                {<FaInstagram className="mx-2  header-icons" />}
                                {<FaFacebookF className="mx-2  header-icons" />}
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
