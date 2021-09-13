import { Component } from "react";
import "../../Assets/Style/Components/Blocks/_Products.scss";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { BiDownload } from "react-icons/bi";

function Products({ data }) {
    return (
        <>
            <div className="Products">
                <Container>
                    <Row>
                        {data.map(({ title, image, text, value2 }) => {
                            return (
                                <Col lg={2} md={3} sm={4} xs={6}>
                                    <div className="block">
                                        <div className="block-title-container">
                                            {" "}
                                            <h5>{title}</h5>
                                        </div>
                                    </div>
                                </Col>
                            );
                        })}
                        {/* <Col lg={2} md={3} sm={4} xs={6}>
                        <div className="block">
                            <div className="block-title-container">
                                {" "}
                                <h5>Food Containers</h5>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2} md={3} sm={4} xs={6}>
                        <div className="block">
                            <div className="block-title-container">
                                {" "}
                                <h5>Warp Film</h5>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2} md={3} sm={4} xs={6}>
                        <div className="block">
                            <div className="block-title-container">
                                {" "}
                                <h5>Stretch Film</h5>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2} md={3} sm={4} xs={6}>
                        <div className="block">
                            <div className="block-title-container">
                                {" "}
                                <h5>Food Bags/ Bags</h5>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2} md={3} sm={4} xs={6}>
                        <div className="block">
                            <div className="block-title-container">
                                {" "}
                                <h5>Cups</h5>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2} md={3} sm={4} xs={6}>
                        <div className="block">
                            <div className="block-title-container">
                                {" "}
                                <h5>Cutlery</h5>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2} md={3} sm={4} xs={6}>
                        <div className="block">
                            <div className="block-title-container">
                                {" "}
                                <h5>Bakery Products</h5>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2} md={3} sm={4} xs={6}>
                        <div className="block">
                            <div className="block-title-container">
                                {" "}
                                <h5>Hygienic & Cleaning</h5>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2} md={3} sm={4} xs={6}>
                        <div className="block">
                            <div className="block-title-container">
                                {" "}
                                <h5> Packaging Requirements</h5>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2} md={3} sm={4} xs={6}>
                        <div className="block">
                            <div className="block-title-container">
                                {" "}
                                <h5>Customized Items</h5>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2} md={3} sm={4} xs={6}>
                        <div className="block">
                            <div className="block-title-container">
                                {" "}
                                <h5>
                                    And over 1500 products{" "}
                                    <div className="HiOutlineChevronDoubleRight">
                                        <HiOutlineChevronDoubleRight />
                                    </div>
                                </h5>
                            </div>
                        </div>
                    </Col> */}
                    </Row>
                </Container>
            </div>
            <div className="Cataloguebtn">
                <Container>
                    <div className="Cataloguebtn1">
                        <span className="Cataloguebtn-name">Catalogue</span>
                        <span className="BsDownload">
                            <BiDownload />
                        </span>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Products;
