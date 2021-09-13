import { Component } from "react";
import "../../Assets/Style/Components/Blocks/_ourvmcp.scss";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// Our Vision,Mission,Core Values,Policies Class Component

function OurVMCP({ data: { core_values, mission, policies, vision } }) {
    return (
        <div className="OurVMCP">
            <Container>
                <Row>
                    <Col className="OurVMCP-Col" lg={3} md={6} sm={6}>
                        <div className="OurVMCP-parent-div">
                            <h5>{vision.title}</h5>
                            <div className="OurVMCP-p-parent">
                                <p dangerouslySetInnerHTML={{ __html: vision.value }} />
                            </div>
                        </div>
                    </Col>
                    <Col className="OurVMCP-Col" lg={3} md={6} sm={6}>
                        <div className="OurVMCP-parent-div">
                            <h5>{mission.title}</h5>
                            <div className="OurVMCP-p-parent">
                                <p dangerouslySetInnerHTML={{ __html: mission.value }} />
                            </div>
                        </div>
                    </Col>
                    <Col className="OurVMCP-Col" lg={3} md={6} sm={6}>
                        <div className="OurVMCP-parent-div">
                            <h5>{core_values.title}</h5>
                            <div className="OurVMCP-p-parent">
                                <p dangerouslySetInnerHTML={{ __html: core_values.value }} />
                            </div>
                        </div>
                    </Col>
                    <Col className="OurVMCP-Col" lg={3} md={6} sm={6}>
                        <div OurVMCP className="OurVMCP-parent-div">
                            <h5>{policies.title}</h5>
                            <div className="OurVMCP-p-parent">
                                {" "}
                                <p dangerouslySetInnerHTML={{ __html: policies.value }} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default OurVMCP;
