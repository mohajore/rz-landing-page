import { Component } from "react";
import "../../Assets/Style/Components/Blocks/_ProductsTitle.scss";
import Container from "react-bootstrap/Container";
class ProductsTitle extends Component {
    render() {
        return (
            <div className="ProductsTitle">
                {console.log(this.props.product_title, "this.props.product_title")}
                <Container>
                    <div className="ProductsTitle1">
                        <div>
                            <span></span>
                            <h5>{this.props.product_title?.value}</h5>
                        </div>
                    </div>
                    {/* <div className="ProductsTitle1 WhiteLine1">
                        <div>
                            <span></span>
                            <h5>Our main core products vary between different groups, are:</h5>
                        </div>
                    </div> */}
                </Container>
            </div>
        );
    }
}

export default ProductsTitle;
