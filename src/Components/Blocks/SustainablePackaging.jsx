import { Component } from "react";
import "../../Assets/Style/Components/Blocks/_SustainablePackaging.scss";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap/";
class SustainablePackaging extends Component {
  render() {
    return (
      <div className="SustainablePackaging">
        <Container>
          <div className="SustainablePackaging-text-container">
            {/* Sustainable Packaging Solutions Title Start */}
            <div>
              <span></span>
              <h5> Sustainable Packaging Solutions</h5>
            </div>
            {/* Sustainable Packaging Solutions Title End */}
            {/* Sustainable Packaging Solutions Paragraph Start */}
            <div>
              <p>
                Alhadaf Int. Company for Importing & Industry L.LC is everyday
                packaging solutions & requirements for sustainable life. Our
                company range of products also includes an increasing range of
                environmentally friendly Bi -degradable compostable for a
                sustainable Erath to reduce the waste and its effects on the
                environment. Our products aim to change the consumer’s behavior
                in the Middle East mainly and the International markets
                generally using Bio degradable material meaning they are made
                from recycled material, organic, and usually decompose in about
                a limited period in life, focusing in protecting trees and find
                different sources for organic material for productions with FSC
                certification. Our Products generally are not harmful to the
                environment, safe for the human health and good choice for
                plastic products bans. Our innovative products made for a
                healthy & safe planet, to ensure they are easy to recycle at
                end-of-life.
              </p>
            </div>
            {/* Sustainable Packaging Solutions Paragraph End */}
            {/* EcoFriendly Products Title Start */}
            <div className="EcoFriendlyProductsTitle">
              <h6>RZ Eco-Friendly products:</h6>
            </div>
            {/* EcoFriendly Products Title End */}
            {/* EcoFriendly Products Paragraph Start */}
            <div className="EcoFriendlyProductsParagraph">
              <Row>
                <p>*Food grade certified by international standards.</p>
                <p className="EcoFriendlyProductsParagraphmargin">
                  *SAFE: Made from high quality ingredients and sterile from
                  harmful compounds.
                </p>
                <p className="EcoFriendlyProductsParagraphmargin">
                  *Quality: Made under the supervision and approval of
                  high-standards quality conditions.
                </p>
              </Row>
            </div>
            {/* EcoFriendly Products Paragraph End */}
          </div>
          {/* Sustainable Packaging Twologos Start */}
          <div className="SustainablePackaginTwologos">
            <div className="Twologos">
              <div className="Twologos1">
                <img src="../../images/fsc.png" />
              </div>
              <div className="Twologos1">
                <img src="../../images/eco.png" />
              </div>
            </div>
          </div>
          {/* Sustainable Packaging Twologos End */}
          <div className="SustainablePackaging-text-container">
            {/*Quality Assurance Title Start */}
            <div>
              <h6 className="QualityAssuranceTitle">Quality Assurance:</h6>
            </div>
            {/*Quality Assurance Title End */}
            {/*Quality Assurance Paragraph Start */}
            <div className="QualityAssuranceSection">
              <Row>
                <Col md={2} sm={3}>
                  <img src="/images/qualitya.png" />
                </Col>
                <Col md={10} sm={9}>
                  <p className="QualityAssuranceParagraph">
                    Alhadaf Quality is placed at the highest stakes. All our
                    processes undergo vigorous tests/assessments to ensure
                    products are delivered to our clients on time and
                    hygienically, conforming to national & international
                    standards and accepted product specifications. We have a
                    Quality Assurance & Control Team with highly qualified
                    standards to keep every thing at the right track.
                  </p>
                </Col>
              </Row>
            </div>
            {/*Quality Assurance Paragraph End */}
          </div>

          {/*Alhadaf Quality Certifications title Start */}
          <div className="AlhadafQualityCertificationsTitle ">
            <h5> Alhadaf Quality Certifications:</h5>
          </div>
          {/*Alhadaf Quality Certifications title End */}
          {/*Alhadaf Quality Certifications 5  Start */}
          <div className="SustainablePackaginFivelogos">
            <div className="Fivelogos">
              <div className="Fivelogos1 ">
                <img src="../../images/iso9001.png" />
                <div>
                  <h5>
                    <a
                      href="/pdf/JO21-85198  Rami Saheb & Partner CO. (Al Hadaf) - ISO 14001 Certificate .pdf"
                      target="_blank"
                    >
                      {" "}
                      Environmental Management System certificate (ISO 14001)
                    </a>
                  </h5>{" "}
                </div>
              </div>
              <div className="Fivelogos1 ">
                <img src="../../images/ISO22000.png" />
                <div>
                  <h5>
                    <a
                      href="/pdf/JO21-85191  Rami Saheb & Partner CO. (Al Hadaf Int.) - ISO 22000 2018 Certificate .pdf"
                      target="_blank"
                    >
                      Food Safety Management System Certificate (ISO 22000)
                    </a>{" "}
                  </h5>
                </div>
              </div>
              <div className="Fivelogos1 ">
                <img src="../../images/iso14001.png" />
                <div>
                  <h5>
                    <a
                      href="/pdf/JO21-85199  Rami Saheb & Partner CO. (Al Hadaf) - ISO 9001 Certificate.pdf"
                      target="_blank"
                    >
                      Quality Management System Certificate (ISO:9001)
                    </a>{" "}
                  </h5>
                </div>
              </div>
              <div className="Fivelogos1 ">
                <img src="../../images/BRC.png" />
                <div>
                  <h5>
                    <a href="/pdf/BRC 2021.pdf" target="_blank">
                      Food Contact Certificate (Jordan Food & Drugs
                      Administration)
                    </a>{" "}
                  </h5>
                </div>
              </div>
              <div className="Fivelogos1 ">
                <img src="../../images/jfd.png" />
                <div>
                  <h5>
                    <a
                      href="/pdf/الغذاء والدواء 2021 .انجليزي.pdf"
                      target="_blank"
                    >
                      Global Standers for Packaging & Packaging Materials. (BRC
                      Certificate)
                    </a>{" "}
                  </h5>
                </div>
              </div>
            </div>
          </div>
          {/*Alhadaf Quality Certifications 5  End */}
        </Container>
      </div>
    );
  }
}

export default SustainablePackaging;
