import { Component } from 'react';
import '../../Assets/Style/Components/Blocks/_SmallRedLine.scss'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


class SmallRedLine extends Component{
  render(){
    return(
      <div className="SmallRedLine">
        <Container>
        <div className="SmallRedLine1">
            <div><h6></h6><h5>Our portfolio of products contains over 1800 products.
           </h5></div>
        </div>
        <div className="SmallRedLine1 SmallRedLine2">
            <div><h4></h4><h5>Our main core products vary between different groups, are:</h5></div> 
        </div>
        </Container>
      </div>
    )}
}


export default SmallRedLine;