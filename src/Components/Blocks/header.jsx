import { Component } from 'react';
import '../../Assets/Style/Components/Blocks/_header.scss'
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
      <Menu   width={ 300 } >
        <a id="home" className="menu-item mt-4" href="/">Home</a>
        <a id="about" className="menu-item" href="/About">About</a>
        <a id="contact" className="menu-item" href="/TEAM">TEAM</a>
        <a id="contact" className="menu-item" href="/Career">Career</a>
        <a id="contact" className="menu-item" href="/GALLERY">GALLERY</a>
        <a id="contact" className="menu-item" href="/CONTACT-US">CONTACT US</a>
        <a id="contact" className="menu-item" href="/TEAM">TEAM</a>
        <a onClick={ this.showSettings } className="menu-item" href="SHOP-NOW">SHOP NOW</a>
      </Menu>
     

    );
  }
}

class Header extends Component{
  render(){
    return(
     
        <div className="Header">
        <Container>
           <div className="header-container">
           
            <Col  ><ul>
                <li ><div className="li-same-tag"></div><a className="a-same-tag" href="/">Home</a></li>
                <li ><div className="li-same-tag"></div><a className="a-same-tag" href="About">About</a></li>
                <li ><div className="li-same-tag"></div><a className="a-same-tag" href="TEAM">TEAM</a></li>
                <li ><div className="li-same-tag"></div><a className="a-same-tag" href="Career">Career</a></li>
                <li ><div className="li-same-tag"></div><a className="a-same-tag" href="GALLERY">GALLERY</a></li>
                <li ><div className="li-same-tag"></div><a className="a-same-tag" href="CONTACT US">CONTACT US</a></li>
                <li className="shop-now"><a  className="a-shop-now-tag"  href="#">SHOP NOW</a></li>
              </ul>
            </Col>
            <Col className="logo-img" ><img src="images/logo.png" /></Col>
          </div>
          
     
          </Container>
          
          <div className="burger-menu"> <Example className=""/> </div>
          <div className="logo-img1" ><img src="images/logo.png" /></div>
      </div>
     
     
    )}
}


export default Header;