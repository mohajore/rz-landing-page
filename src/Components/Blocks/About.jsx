import { Component } from "react";
import "../../Assets/Style/Components/Blocks/_about.scss";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { apiService } from "../../services/ApiService";
function About({ data: { title, image, value, value2 } }) {
    return (
        <div className="About">
            <Container>
                <div className="About1">
                    <Row>
                        {/* AboutUs Image Start */}
                        <Col xl={6} lg={6} md={6} sm={12}>
                            <div className="About-image-container">
                                &nbsp;
                                <div className="white-div">
                                    &nbsp;
                                    <div>
                                        <img src={image ? apiService.imageLink + image : "images/Group 891.png"} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        {/* AboutUs Image End */}
                        {/* AboutUs Paragraph Start */}
                        <Col xl={6} lg={6} md={6} sm={12}>
                            <div className="About-text-container">
                                <div>
                                    <span></span>
                                    <h5> {title}</h5>
                                </div>
                                <div>
                                    <p dangerouslySetInnerHTML={{ __html: value }} />
                                </div>
                            </div>
                        </Col>
                        {/* AboutUs Paragraph End */}
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default About;
