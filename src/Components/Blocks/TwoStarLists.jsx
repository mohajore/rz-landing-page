import { Component } from "react";
import "../../Assets/Style/Components/Blocks/_TwoStarLists.scss";
import Container from "react-bootstrap/Container";

class TwoStarLists extends Component {
  render() {
    return (
      <div className="TwoStarLists">
        <Container>
          <div className="two-lists">
            <ul>
              <li>
                &nbsp; We can customize our products to any channel’s
                requirements.
              </li>
              <li>
                &nbsp; The product range expanded recently to include our
                eco-friendly products, recyclable and (Biodegradable)
              </li>
              <li>
                &nbsp;We, in Alhadaf, are focused on sustainability from our raw
                materials to our manufacturing to our logistics.
              </li>
              <li>
                &nbsp;But in the end, it is the people in Alhadaf who make us
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

export default TwoStarLists;
