import { Component } from "react";
import "../../Assets/Style/Components/Blocks/_CompanyNews.scss";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
class CompanyNews extends Component {
  render() {
    return (
      <div className="CompanyNews">
        <div>
          <div className="labourDay-imgDiv">
            <img src="../../images/labourDay.png" />
          </div>
          <Container>
            <Row>
              <Col md={5}>
                <div className="Company-news">Company news</div>
              </Col>
              <Col md={7}>
                <div className="labourDay">
                  <div className="labourDay1">
                    <h4>Alhadaf celebrates the Labor Day with Employees </h4>
                    <div>
                      <p>
                        Alhadaf Int Company is launching new production lines to
                        bring to market Nurse Cap & PE Gloves. We are considered
                        to be one of the top manufacturers of food packaging and
                        disposables for households and the foodservice industry
                        in the region. We pride ourselves on delivering
                        high-quality products at very competitive prices. Our
                        leaders challenge us everyday to go beyond what we have
                        promised our customers, the best quality products and
                        service at competitive prices. This commitment is
                        combined with our passion to ensure that our customers,
                        both local and global, have a seamless journey from
                        start to finish and hence keep coming back to us again
                        and again. With state of the art machinery combined with
                        our in depth production and quality knowledge gained
                        from our over 20 years experience, we ensure that our
                        products are top quality. Throughout the company we
                        focus on continuous improvement, we strive to exceed our
                        customer expectations. We pride ourselves on
                        understanding what our customers require. Al Hadaf
                        renowned production flexibility allows us to meet our
                        customers' requirements. We can customize our products
                        to your requirements. Our portfolio of products contains
                        over 1500 products. Our core products are
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default CompanyNews;
