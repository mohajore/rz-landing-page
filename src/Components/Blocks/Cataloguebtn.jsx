import { Component } from "react";
import "../../Assets/Style/Components/Blocks/_Cataloguebtn.scss";
import Container from "react-bootstrap/Container";
import { BiDownload } from "react-icons/bi";

class Cataloguebtn extends Component {
  render() {
    return (
      <div className="Cataloguebtn">
        <Container>
          <div className="Cataloguebtn1">
            <span className="Cataloguebtn-name">Catalogue</span>
            <span className="BsDownload">
              <BiDownload />
            </span>
          </div>
        </Container>
      </div>
    );
  }
}
export default Cataloguebtn;
