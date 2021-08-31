import { Component } from "react";
import "../../Assets/Style/Components/Blocks/_header.scss";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { slide as Menu } from "react-burger-menu";
import reactDom from "react-dom";
class Example extends Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <Menu width={300}>
        <a id="home" className="menu-item mt-4" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/About">
          About
        </a>
        <a id="contact" className="menu-item" href="/TEAM">
          TEAM
        </a>
        <a id="contact" className="menu-item" href="/Career">
          Career
        </a>
        <a id="contact" className="menu-item" href="/GALLERY">
          GALLERY
        </a>
        <a id="contact" className="menu-item" href="/CONTACT-US">
          CONTACT US
        </a>
        <a id="contact" className="menu-item" href="/TEAM">
          TEAM
        </a>
        <a onClick={this.showSettings} className="menu-item" href="SHOP-NOW">
          SHOP NOW
        </a>
      </Menu>
    );
  }
}

class Header extends Component {
  state = { activeHeader: 0 };
  componentDidMount() {
    if (window.location.pathname.toLowerCase() === "/") {
      this.setState({
        activeHeader: 1,
      });
    }
    if (window.location.pathname.toLowerCase() === "/about") {
      this.setState({
        activeHeader: 2,
      });
    }
    if (window.location.pathname.toLowerCase() === "/team") {
      this.setState({
        activeHeader: 3,
      });
    }
    if (window.location.pathname.toLowerCase() === "/career") {
      this.setState({
        activeHeader: 4,
      });
    }
    if (window.location.pathname.toLowerCase() === "/gallery") {
      this.setState({
        activeHeader: 5,
      });
    }
    if (window.location.pathname.toLowerCase() === "/contactus") {
      this.setState({
        activeHeader: 6,
      });
    }
    if (window.location.pathname.toLowerCase() === "/shopnow") {
      this.setState({
        activeHeader: 7,
      });
    }
  }
  render() {
    const { activeHeader } = this.state;
    return (
      <div className="Header">
        <Container>
          <Row className="header-container">
            <Col xs={9} className="HeaderColumn">
              <ul>
                <li className={activeHeader == 1 ? "activeHeader" : ""}>
                  <div className="li-same-tag"></div>
                  <a className="a-same-tag" href="/">
                    Home
                  </a>
                </li>
                <li className={activeHeader == 2 ? "activeHeader" : ""}>
                  <div className="li-same-tag"></div>
                  <a className="a-same-tag" href="About">
                    About
                  </a>
                </li>
                <li className={activeHeader == 3 ? "activeHeader" : ""}>
                  <div className="li-same-tag"></div>
                  <a className="a-same-tag" href="TEAM">
                    TEAM
                  </a>
                </li>
                <li className={activeHeader == 4 ? "activeHeader" : ""}>
                  <div className="li-same-tag"></div>
                  <a className="a-same-tag" href="Career">
                    Career
                  </a>
                </li>
                <li className={activeHeader == 5 ? "activeHeader" : ""}>
                  <div className="li-same-tag"></div>
                  <a className="a-same-tag" href="GALLERY">
                    GALLERY
                  </a>
                </li>
                <li className={activeHeader == 6 ? "activeHeader" : ""}>
                  <div className="li-same-tag"></div>
                  <a className="a-same-tag" href="CONTACTUS">
                    CONTACT US
                  </a>
                </li>
                <li
                  className={activeHeader == 7 ? "activeHeader" : ""}
                  className="shop-now"
                >
                  <a className="a-shop-now-tag" href="SHOPNOW">
                    SHOP NOW
                  </a>
                </li>
              </ul>
            </Col>
            <Col xs={3} className="HeaderColumn logo-img">
              <a href="/">
                <img src="images/logo1.png" />
              </a>
            </Col>
          </Row>
        </Container>

        <div className="burger-menu">
          {" "}
          <Example className="" />{" "}
        </div>
        <div className="logo-img1">
          <a href="#">
            {" "}
            <img src="images/logo1.png" />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
