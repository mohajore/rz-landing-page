import { Component } from "react";
import "../../Assets/Style/Components/Blocks/_TEA.scss";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class SustainablePackaging extends Component {
  render() {
    return (
      <div className="SustainablePackaging">
        <Container>
          <div className="SustainablePackaging-text-container">
            <div>
              <span></span>
              <h5> Sustainable Packaging Solutions</h5>
            </div>
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
                end-of-life. RZ Eco-Friendly products: *Food grade certified by
                international standards. *SAFE: Made from high quality
                ingredients and sterile from harmful compounds. *Quality: Made
                under the supervision and approval of high-standards quality
                conditions.
              </p>
            </div>
          </div>
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
          <div className="SustainablePackaging-text-container">
            <div>
              <h5> Quality Assurance:</h5>
            </div>
            <div>
              <p>
                Alhadaf Quality is placed at the highest stakes. All our
                processes undergo vigorous tests/assessments to ensure products
                are delivered to our clients on time and hygienically,
                conforming to national/international standards and accepted
                product specifications. We have a Quality Assurance & Control
                Team with highly qualified and well-trained Quality
                professionals. all the incoming raw material inspections are
                undertaken as per international Standards, to ensure the product
                quality is not compromised at all, focusing on Human Health, and
                planet sustainability
              </p>
            </div>
          </div>
          <div className="SustainablePackaginFivelogosTitle ">
            <h5> Alhadaf Quality Certifications:</h5>
          </div>
          <div className="SustainablePackaginFivelogos">
            <div className="Fivelogos">
              <div className="Fivelogos1 ">
                <img src="../../images/iso9001.png" />
                <div>
                  <h5>
                    Environmental Management System certificate (ISO 14001)
                  </h5>{" "}
                </div>
              </div>
              <div className="Fivelogos1 ">
                <img src="../../images/ISO22000.png" />
                <div>
                  <h5>Food Safety Management System Certificate (ISO 22000)</h5>{" "}
                </div>
              </div>
              <div className="Fivelogos1 ">
                <img src="../../images/iso14001.png" />
                <div>
                  <h5>Quality Management System Certificate (ISO:9001)</h5>{" "}
                </div>
              </div>
              <div className="Fivelogos1 ">
                <img src="../../images/BRC.png" />
                <div>
                  <h5>
                    Food Contact Certificate (Jordan Food & Drugs
                    Administration)
                  </h5>{" "}
                </div>
              </div>
              <div className="Fivelogos1 ">
                <img src="../../images/jfd.png" />
                <div>
                  <h5>
                    Global Standers for Packaging & Packaging Materials. (BRC
                    Certificate)
                  </h5>{" "}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default SustainablePackaging;
