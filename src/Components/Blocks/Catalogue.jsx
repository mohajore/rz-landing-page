import { Component } from 'react';
import '../../Assets/Style/Components/Blocks/_Catalogue.scss'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
class Catalogue extends Component{
  render(){
    return(
      <div className="Catalogue">
        <Container>
            <Row>
              <Col lg={2} md={3} sm={4} xs={6}><div className="block"><div className="block-title-container"> <h5>Aluminium foil</h5></div></div></Col>
              <Col lg={2} md={3} sm={4} xs={6}><div className="block"><div className="block-title-container"> <h5>Food Containers</h5></div></div></Col>
              <Col lg={2} md={3} sm={4} xs={6}><div className="block"><div className="block-title-container"> <h5>Warp Film</h5></div></div></Col>
              <Col lg={2} md={3} sm={4} xs={6}><div className="block"><div className="block-title-container"> <h5>Stretch Film</h5></div></div></Col>
              <Col lg={2} md={3} sm={4} xs={6}><div className="block"><div className="block-title-container"> <h5>Food Bags/ Bags</h5></div></div></Col>
              <Col lg={2} md={3} sm={4} xs={6}><div className="block"><div className="block-title-container"> <h5>Cups</h5></div></div></Col>
              <Col lg={2} md={3} sm={4} xs={6}><div className="block"><div className="block-title-container"> <h5>Cutlery</h5></div></div></Col>
              <Col lg={2} md={3} sm={4} xs={6}><div className="block"><div className="block-title-container"> <h5>Bakery Products</h5></div></div></Col>
              <Col lg={2} md={3} sm={4} xs={6}><div className="block"><div className="block-title-container"> <h5>Hygienic & Cleaning</h5></div></div></Col>
              <Col lg={2} md={3} sm={4} xs={6}><div className="block"><div className="block-title-container"> <h5> Packaging Requirements</h5></div></div></Col>
              <Col lg={2} md={3} sm={4} xs={6}><div className="block"><div className="block-title-container"> <h5>Customized Items</h5></div></div></Col>
              <Col lg={2} md={3} sm={4} xs={6}><div className="block"><div className="block-title-container"> <h5>And over 1500 products <div className="HiOutlineChevronDoubleRight"><HiOutlineChevronDoubleRight/></div></h5></div></div></Col>
              
            </Row>
        </Container>
      </div>
    )}
}


export default Catalogue;