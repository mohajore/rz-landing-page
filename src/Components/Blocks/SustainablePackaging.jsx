import { Component } from "react";
import "../../Assets/Style/Components/Blocks/_SustainablePackaging.scss";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap/";
import { apiService } from "../../services/ApiService";
function SustainablePackaging({ data, qa, qa_certificate }) {
    return (
        <div className="SustainablePackaging">
            <Container>
                <div className="SustainablePackaging-text-container">
                    {/* Sustainable Packaging Solutions Title Start */}
                    <div>
                        <span></span>
                        <h5> {data[0].title}</h5>
                    </div>
                    {/* Sustainable Packaging Solutions Title End */}
                    {/* Sustainable Packaging Solutions Paragraph Start */}
                    <div dangerouslySetInnerHTML={{ __html: data[0].value }} />

                    {/* Sustainable Packaging Solutions Paragraph End */}
                    {/* EcoFriendly Products Title Start */}
                    <div className="EcoFriendlyProductsTitle" style={{marginTop:20}}>
                        <h6>{data[1].title}</h6>
                    </div>
                    {/* EcoFriendly Products Title End */}
                    {/* EcoFriendly Products Paragraph Start */}
                    <div className="EcoFriendlyProductsParagraph">
                        <Row>
                            <p dangerouslySetInnerHTML={{ __html: data[1].value }} />
                        </Row>
                    </div>
                    {/* EcoFriendly Products Paragraph End */}
                </div>
                {/* Sustainable Packaging Twologos Start */}
                <div className="SustainablePackaginTwologos">
                    <div className="Twologos">
                        {
                            data[0].image ?
                                <div className="Twologos1">
                                    <img src={apiService.imageLink + data[0].image} />
                                </div>
                                :
                                null
                        }
                        {
                            data[1].image ?
                                <div className="Twologos1">
                                    <img src={apiService.imageLink + data[1].image} />
                                </div>
                                :
                                null
                        }

                    </div>
                </div>
                {/* Sustainable Packaging Twologos End */}
                <div className="SustainablePackaging-text-container">
                    {/*Quality Assurance Title Start */}
                    {
                        /*
                        <div>
                        <h6 className="QualityAssuranceTitle">{qa.title}</h6>
                    </div>
                        */
                    }
                    {/*Quality Assurance Title End */}
                    {/*Quality Assurance Paragraph Start */}
                    <div className="QualityAssuranceSection">
                        <Row>
                            <Col md={2} sm={3}>
                                <img src="/images/qualitya.png" />
                            </Col>
                            <Col md={10} sm={9}>
                                <p dangerouslySetInnerHTML={{ __html: qa.value }} />
                            </Col>
                        </Row>
                    </div>
                    {/*Quality Assurance Paragraph End */}
                </div>

                {/*Alhadaf Quality Certifications title Start */}
                <div className="AlhadafQualityCertificationsTitle ">
                    <h5>{qa_certificate[0].title}</h5>
                </div>
                {/*Alhadaf Quality Certifications title End */}
                {/*Alhadaf Quality Certifications 5  Start */}
                <div className="SustainablePackaginFivelogos">
                    <div className="Fivelogos">
                        {qa_certificate.map(({ id, title, value, image, value2 }) => {
                            return (
                                <div className="Fivelogos1 ">
                                    <img src={apiService.imageLink + image} />
                                    <div>
                                        <h5>
                                            <a href={value2} target="_blank">
                                                <p dangerouslySetInnerHTML={{ __html: value }} />
                                            </a>
                                        </h5>{" "}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                {/*Alhadaf Quality Certifications 5  End */}
            </Container>
        </div>
    );
}

export default SustainablePackaging;
