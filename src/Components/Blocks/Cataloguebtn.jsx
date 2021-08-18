import { Component } from 'react';
import '../../Assets/Style/Components/Blocks/_Cataloguebtn.scss'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { BsDownload } from "react-icons/bs";
class Cataloguebtn extends Component{
  render(){
    return(
      <div className="Cataloguebtn">
        <Container>
          <div className="Cataloguebtn1">
            <span className="Cataloguebtn-name">Catalogue</span>
            <span className="BsDownload"><BsDownload/></span>
          </div>
        </Container>
      </div>
    )}
}
export default Cataloguebtn;