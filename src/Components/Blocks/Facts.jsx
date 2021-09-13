import { Component } from "react";
import "../../Assets/Style/Components/Blocks/_Facts.scss";
import Container from "react-bootstrap/Container";
function Facts({ data }) {
    return (
        <div className="Facts">
            <Container>
                <div className="Facts1">
                    <div className="fact-word">Facts</div>
                    <div class="grid-container">
                        {data.map(({ title, image, value }) => {
                            return (
                                <div className="Facts-num">
                                    <h2>{title}</h2>

                                    {/* <h6></h6> */}
                                    <div className="FactsParagraphContainer">
                                        <p dangerouslySetInnerHTML={{ __html: value }} />
                                    </div>
                                </div>
                            );
                        })}
                        {/*                        
                        <div className="Facts-num">
                            <h2>22</h2>
                            <div className="FactsParagraphContainer">
                                {" "}
                                <p>Export countries.</p>
                            </div>
                        </div>
                        <div className="Facts-num">
                            <h2>20,000</h2>
                            <div className="FactsParagraphContainer">
                                {" "}
                                <p>sqm (215,000 square foot) Production facility.</p>
                            </div>
                        </div>
                        <div className="Facts-num">
                            <h2>2300</h2>
                            <div className="FactsParagraphContainer">
                                {" "}
                                <p>Items</p>
                            </div>
                        </div>
                        <div className="Facts-num">
                            <h2>200</h2>
                            <div className="FactsParagraphContainer">
                                {" "}
                                <p>Employees ( Females & Males)</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </Container>
        </div>
    );
}
export default Facts;
