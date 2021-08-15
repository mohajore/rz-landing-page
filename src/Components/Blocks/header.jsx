import { Component } from 'react';
import '../../Assets/Style/Components/Blocks/_header.scss'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { slide as Menu } from 'react-burger-menu'
import reactDom from 'react-dom';

class Example extends Component {
  showSettings (event) {
    event.preventDefault();
    
  }
  render () {

    return (
     


     
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
     

    );
  }
}

class Header extends Component{
  render(){
    return(
     <div>
        <div className="Header">
        <Container>
         <div className="header-container">
            <Col className="logo-img" ><img src="images/logo.png" /></Col>
            <Col  ><ul>
                <li ><div className="li-same-tag"></div><a className="a-same-tag" href="#">Home</a></li>
                <li ><div className="li-same-tag"></div><a className="a-same-tag" href="#">About</a></li>
                <li ><div className="li-same-tag"></div><a className="a-same-tag" href="#">TEAM</a></li>
                <li ><div className="li-same-tag"></div><a className="a-same-tag" href="#">Career</a></li>
                <li ><div className="li-same-tag"></div><a className="a-same-tag" href="#">GALLERY</a></li>
                <li ><div className="li-same-tag"></div><a className="a-same-tag" href="#">CONTACT US</a></li>
                <li className="shop-now"><a  className="a-shop-now-tag"  href="#">SHOP NOW</a></li>
              </ul></Col>
            
          </div>
          </Container>
          
      </div>
      <Container>
      <Example className="burger-menu"/>
      </Container>
     </div>
    )}
}


export default Header;