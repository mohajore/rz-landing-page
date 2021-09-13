import { Component } from "react";
import "../../Assets/Style/Components/Blocks/_CompanyNews.scss";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { IoIosArrowDown, IoIosArrowUp, IoIosArrowForward } from "react-icons/io";
import Carousel, { consts } from "react-elastic-carousel";
class CompanyNews extends Component {
    // react-elastic-carousel propeties Start
    //  const selectedParagraph = this.setState;
    // setState = {};
    state = {
        selectedParagraph: this.props?.data[0]?.text,
        selectedTitle: this.props?.data[0]?.title,
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
        const pointer = type === consts.PREV ? <IoIosArrowUp className="MyArrow" size={50} /> : <IoIosArrowDown className="MyArrow" size={50} />;
        return (
            <span onClick={onClick} disabled={isEdge}>
                {pointer}
            </span>
        );
    }

    // react-elastic-carousel propeties End
    render() {
        const { selectedParagraph, selectedTitle } = this.state;
        const { data } = this.props;
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
                                    {data?.map(({ text, title, id, iamge }) => {
                                        return (
                                            <div
                                                className="Company-news-Item"
                                                onClick={() => {
                                                    this.setState({
                                                        selectedParagraph: text,
                                                        selectedTitle: title,
                                                    });
                                                }}
                                            >
                                                <h3>{title} </h3>
                                                {/* <h6>{text}</h6> */}
                                                <h6 dangerouslySetInnerHTML={{ __html: text }} />

                                                <div className="Company-news-Item-icon">
                                                    <IoIosArrowForward />
                                                </div>
                                            </div>
                                        );
                                    })}
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
                                    <h4>{selectedTitle} </h4>{" "}
                                </div>
                                <div className="labourDayParagraph">
                                    <p dangerouslySetInnerHTML={{ __html: selectedParagraph }} />
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
