import { Component } from "react";
import "../../Assets/Style/Components/Blocks/_CustomizedFoodPackaging.scss";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { WhatsappShareButton } from "react-share";

class CustomizedFoodPackaging extends Component {
    render() {
        return (
            <div className="CustomizedFoodPackaging">
                <Container>
                    <div className="UnderContainerCustomizedFoodPackaging">
                        <div className="CustomizedFoodPackagingTitle">
                            <span></span>
                            <h5>Do you need your own customized food packaging products?</h5>
                        </div>
                        <div className="CustomizedFoodPackagingTwoTitles">
                            <div className="TwoTitles">
                                <div className="title">
                                    <WhatsappShareButton
                                        url={this.props.data[1]?.value}
                                        separator=":: "
                                        // title={this.state.Details.title}
                                    >
                                        <h5 href="/">CONTACT VIA WHATSAPP</h5>
                                    </WhatsappShareButton>
                                </div>
                                <div className="title ">
                                    <a href={"tel:" + this.props.data[1]?.value}>CALL US</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default CustomizedFoodPackaging;
