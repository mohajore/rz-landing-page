import { Component } from "react";
import "../../Assets/Style/Components/Blocks/_draft.scss";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Draft extends Component {
  render() {
    return (
      <div className="draft">
        <Container>
          <div className="two-lists">
            <ul>
              <li>
                &nbsp; in Alhadaf, are focused on sustainability from our raw
                materials to our manufacturing to our logistics.
              </li>
              <li>
                &nbsp;in the end, it is the people in Alhadaf who make us
                different. Every day, we endeavour to make sure that you, the
                customer is happy with us, our products and our service. With
                our energy, passion and our commitment, we aim to make Alhadaf
                the best food packaging company in the world.
              </li>
            </ul>
          </div>
        </Container>
      </div>
    );
  }
}

export default Draft;
