import { Component } from "react";
import "../../Assets/Style/Components/Blocks/_CompanyNews.scss";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosArrowForward,
} from "react-icons/io";
import Carousel, { consts } from "react-elastic-carousel";
class CompanyNews extends Component {
  // react-elastic-carousel propeties Start
  constructor(props) {
    super(props);
    this.breakPoints = [
      { width: 1, itemsToShow: 3 },
      { width: 250, itemsToShow: 4 },
      { width: 329, itemsToShow: 4 },
    ];
  }
  myArrow({ type, onClick, isEdge }) {
    const pointer =
      type === consts.PREV ? (
        <IoIosArrowUp className="MyArrow" size={50} />
      ) : (
        <IoIosArrowDown className="MyArrow" size={50} />
      );
    return (
      <span onClick={onClick} disabled={isEdge}>
        {pointer}
      </span>
    );
  }
  // react-elastic-carousel propeties End
  render() {
    return (
      <div className="CompanyNewsComponent">
        <Container>
          <Row>
            <Col className="Symmtric" md={6}>
              <div className="Company-news">
                 {/* Company-news Title Start */}
                <div className="CompanyNewsTitleContainer">
                  <span></span>
                  <h5>Company news</h5>
                </div>
                  {/* Company-news Title End */}
                 {/* react-elastic-carousel Start */}
                <Carousel
                  renderArrow={this.myArrow}
                  breakPoints={this.breakPoints}
                  verticalMode
                  itemsToShow={3}
                  renderPagination={({ pages, activePage, onClick }) => {
                    return (
                      <div direction="row">
                        {pages.map((page) => {
                          const isActivePage = activePage === page;
                          return <div></div>;
                        })}
                      </div>
                    );
                  }}
                >
                  <div className="Company-news-Item">
                    <h3>Alhadaf celebrates the Labor Day with Employees </h3>
                    <h6>
                      Alhadaf Int Company is launching new production lines to
                      bring to market . . .{" "}
                    </h6>
                    <div className="Company-news-Item-icon">
                      <IoIosArrowForward />
                    </div>
                  </div>
                  <div className="Company-news-Item">
                    <h3>Alhadaf celebrates the Labor Day with Employees </h3>
                    <h6>
                      Alhadaf Int Company is launching new production lines to
                      bring to market . . .{" "}
                    </h6>
                    <div className="Company-news-Item-icon">
                      <IoIosArrowForward />
                    </div>
                  </div>
                  <div className="Company-news-Item">
                    <h3>Alhadaf celebrates the Labor Day with Employees </h3>
                    <h6>
                      Alhadaf Int Company is launching new production lines to
                      bring to market . . .{" "}
                    </h6>
                    <div className="Company-news-Item-icon">
                      <IoIosArrowForward />
                    </div>
                  </div>
                  <div className="Company-news-Item">
                    <h3>Alhadaf celebrates the Labor Day with Employees </h3>
                    <h6>
                      Alhadaf Int Company is launching new production lines to
                      bring to market . . .{" "}
                    </h6>
                    <div className="Company-news-Item-icon">
                      <IoIosArrowForward />
                    </div>
                  </div>
                  <div className="Company-news-Item">
                    <h3>Alhadaf celebrates the Labor Day with Employees </h3>
                    <h6>
                      Alhadaf Int Company is launching new production lines to
                      bring to market . . .{" "}
                    </h6>
                    <div className="Company-news-Item-icon">
                      <IoIosArrowForward />
                    </div>
                  </div>
                  <div className="Company-news-Item">
                    <h3>Alhadaf celebrates the Labor Day with Employees </h3>
                    <h6>
                      Alhadaf Int Company is launching new production lines to
                      bring to market . . .{" "}
                    </h6>
                    <div className="Company-news-Item-icon">
                      <IoIosArrowForward />
                    </div>
                  </div>
                  <div className="Company-news-Item">
                    <h3>Alhadaf celebrates the Labor Day with Employees </h3>
                    <h6>
                      Alhadaf Int Company is launching new production lines to
                      bring to market . . .{" "}
                    </h6>
                    <div className="Company-news-Item-icon">
                      <IoIosArrowForward />
                    </div>
                  </div>
                </Carousel>
                   {/* react-elastic-carousel End */}
              </div>
            </Col>
              {/* Labour-Day Paragraph Start */}
            <Col className="Labour-Day Symmtric" md={6}>
              <div className="labourDay-imgDiv">
                <img src="../../images/labourDay.png" />
              </div>
              <div className="labourDayTitleParagraph">
                <div className="labourDayTitle">
                  <h4>Alhadaf celebrates the Labor Day with Employees </h4>{" "}
                </div>
                <div className="labourDayParagraph">
                  <p>
                    Alhadaf Int Company is launching new production lines to
                    bring to market Nurse Cap & PE Gloves. We are considered to
                    be one of the top manufacturers of food packaging and
                    disposables for households and the foodservice industry in
                    the region. We pride ourselves on delivering high-quality
                    products at very competitive prices. Our leaders challenge
                    us everyday to go beyond what we have promised our
                    customers, the best quality products and service at
                    competitive prices. This commitment is combined with our
                    passion to ensure that our customers, both local and global,
                    have a seamless journey from start to finish and hence keep
                    coming back to us again and again. With state of the art
                    machinery combined with our in depth production and quality
                    knowledge gained from our over 20 years experience, we
                    ensure that our products are top quality. Throughout the
                    company we focus on continuous improvement, we strive to
                    exceed our customer expectations. We pride ourselves on
                    understanding what our customers require. Al Hadaf renowned
                    production flexibility allows us to meet our customers'
                    requirements. We can customize our products to your
                    requirements. Our portfolio of products contains over 1500
                    products. Our core products are
                  </p>
                </div>
              </div>
            </Col>
              {/* Labour-Day Paragraph End */}
          </Row>
        </Container>
      </div>
    );
  }
}
export default CompanyNews;
