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
  //  const selectedParagraph = this.setState;
  // setState = {};
  state = {
    selectedParagraph:
      "Alhadaf Int Company is launching new production lines to bring to market Nurse Cap & PE Gloves made locally, to have 16 production lines in total as part of the development plans for this year 2021",
  };
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
    const { selectedParagraph } = this.state;
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
                  <div
                    className="Company-news-Item"
                    onClick={() => {
                      this.setState({
                        selectedParagraph:
                          " Alhadaf Int Company is launching new production lines to bring to market Nurse Cap & PE Gloves made locally, to have 16 production lines in total as part of the development plans for this year 2021",
                      });
                    }}
                  >
                    <h3>
                      Alhadaf Int Company is launching new production lines{" "}
                    </h3>
                    <h6>
                      Alhadaf Int Company is launching new production lines to
                      bring to market Nurse Cap & PE Gloves made locally . . .{" "}
                    </h6>
                    <div className="Company-news-Item-icon">
                      <IoIosArrowForward />
                    </div>
                  </div>
                  <div
                    className="Company-news-Item"
                    onClick={() => {
                      this.setState({
                        selectedParagraph:
                          "Alhadaf celebrates the 1st of May, “Labor Day”. CEO Mr. Rami Saheb joined his big family of employees to celebrate and appreciate hard workers efforts during the year.  Focusing on gender equity and social justice. raising the quote : “No work is insignificant. All labor that uplifts humanity has dignity and importance and should be undertaken with painstaking excellence.”   M. L. K.",
                      });
                    }}
                  >
                    <h3>Alhadaf celebrates the 1st of May, “Labor Day”. </h3>
                    <h6>
                      Alhadaf celebrates the 1st of May, “Labor Day”. CEO Mr.
                      Rami Saheb joined his big family of employees to . . .{" "}
                    </h6>
                    <div
                      className="Company-news-Item-icon"
                      onClick={() => {
                        this.setState({
                          selectedParagraph:
                            " Alhadaf family celebrate the National Flag day on the 16th of April as part of the national celebration of the country’s centenary on April 11. National music, patriotism speech and several activities were made around this national occasion.",
                        });
                      }}
                    >
                      <IoIosArrowForward />
                    </div>
                  </div>
                  <div
                    className="Company-news-Item"
                    onClick={() => {
                      this.setState({
                        selectedParagraph:
                          " Our real goal is to invest internal energies to create knowledge, refine skills and develop experiences. Alhadaf Int. Co organized a new training course for the Sales & CRM team on “ The Art of Sales & effective supervision” done by MK Academy in main office in Jordan to keep the flow of development moving a head at all levels. Aug, 2021",
                      });
                    }}
                  >
                    <h3>
                      Alhadaf family celebrate the National Flag day on the 16th
                      of April{" "}
                    </h3>
                    <h6>
                      Alhadaf family celebrate the National Flag day on the 16th
                      of April as part of the national celebration of the
                      country’s . . .{" "}
                    </h6>
                    <div className="Company-news-Item-icon">
                      <IoIosArrowForward />
                    </div>
                  </div>
                  <div
                    className="Company-news-Item"
                    onClick={() => {
                      this.setState({
                        selectedParagraph:
                          "Alhadaf Int. Co. Management, CEO Mr. Rami Saheb signed a new development project agreement supported by Jordan Enterprise Development Corporation (JEDCO), for increasing export through E- Commerce platforms. Aug, 2021                          ",
                      });
                    }}
                  >
                    <h3>
                      Alhadaf Int. Co. Management, CEO Mr. Rami Saheb signed a
                      new development project{" "}
                    </h3>
                    <h6>
                      Alhadaf Int. Co. Management, CEO Mr. Rami Saheb signed a
                      new development project agreement supported by . . .{" "}
                    </h6>
                    <div className="Company-news-Item-icon">
                      <IoIosArrowForward />
                    </div>
                  </div>
                  <div
                    className="Company-news-Item"
                    onClick={() => {
                      this.setState({
                        selectedParagraph:
                          " Alhadaf Int. Co. for Importing & Industry participated in the largest Food platform gathering in the MENA Area. “Food & Beverage Products, Food processing, Technologies Fair “ in Istanbul, which was held between 1st – 4th  of Sep, 2021, At the CNR EXPO ISTANBUL CENTE . The Exhibition hosted more than 84 countries, and thousands of ",
                      });
                    }}
                  >
                    <h3>
                      Our real goal is to invest internal energies to create
                      knowledge,
                    </h3>
                    <h6>
                      Our real goal is to invest internal energies to create
                      knowledge, refine skills and develop experiences . . .{" "}
                    </h6>
                    <div className="Company-news-Item-icon">
                      <IoIosArrowForward />
                    </div>
                  </div>
                  <div className="Company-news-Item">
                    <h3>
                      Alhadaf Int. Co. for Importing & Industry participated in
                      the largest Food platform{" "}
                    </h3>
                    <h6>
                      Alhadaf Int. Co. for Importing & Industry participated in
                      the largest Food platform gathering in the MENA Area . . .{" "}
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
                <img src="../../images/news photos.jfif" />
              </div>
              <div className="labourDayTitleParagraph">
                <div className="labourDayTitle">
                  <h4>Alhadaf celebrates the Labor Day with Employees </h4>{" "}
                </div>
                <div className="labourDayParagraph">
                  <p>{selectedParagraph}</p>
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
