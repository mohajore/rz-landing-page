import { Component } from "react";
import "../../Assets/Style/Components/Blocks/_welcome.scss";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { IoIosArrowForward } from "react-icons/io";
import { apiService } from "../../services/ApiService";

function Welcome({ shop_link, data: { title, image, value, value2 } }) {
    return (
        <div className="Welcome">
            <Container>
                <div className="Welcome1">
                    <Row>
                        {/* Welcome Intoduction section start */}
                        <Col xl={6} lg={6} md={6} sm={12}>
                            <div className="welcome-titles-container">
                                <h2 className="">{title}</h2>
                                <div className="welcome-h5-container">
                                    {/* <h5>{value}</h5> */}
                                    <h5 dangerouslySetInnerHTML={{ __html: value }} />
                                </div>
                                <a href="#" className="welcome-shop-now-btn-container" >
                                    <span className="BtnName">SHOP NOW </span>
                                    <span className="BtnIcon">
                                        {" "}
                                        <IoIosArrowForward className="IoIosArrowForward" />
                                    </span>
                                </a>
                            </div>
                        </Col>
                        {/* Welcome Intoduction section End */}
                        {/* Welcome image section start */}
                        <Col xl={6} lg={6} md={6} sm={12}>
                            {" "}
                            <div className="welcome-img-container">
                                {" "}
                                <img className="" src={image ? apiService.imageLink + image : "images/building11.jpg"} />{" "}
                            </div>{" "}
                        </Col>
                        {/* Welcome image section End */}
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default Welcome;
