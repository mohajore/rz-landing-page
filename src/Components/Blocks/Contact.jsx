import React, { Component } from "react";
import "../../Assets/Style/Components/Blocks/_welcome.scss";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import LocationPicker from "react-location-picker";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { BiPhone } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { CgPin } from "react-icons/cg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
class Contact extends Component {
  state = {
    /* Default position */
    defaultPosition: {
      lat: 31.963158,
      lng: 35.930359,
    },
    position: {
      lat: 31.963158,
      lng: 35.930359,
    },
  };

  // handle location change ////
  handleLocationChange = ({ position }) => {
    // Set new location
    this.setState({ position });
  };

  render() {
    const { defaultPosition } = this.state;
    return (
      <div className="Contact">
        <Container>
          <Row className="row1">
            <Col Col={6}>
              <div className="LocationPickerExample">
                <LocationPicker
                  containerElement={<div style={{ height: "100%" }} />}
                  mapElement={<div className="CustomMapView" />}
                  onChange={this.handleLocationChange}
                  defaultPosition={defaultPosition}
                  circleOptions={{ visible: false }}
                />
                <div className="BranchLocations">
                  <div className="BranchLocation">
                    <div className="BranchLocationIcons">
                      <CgPin />
                    </div>
                    <div className="BranchLocationTitle">
                      <span></span>
                      <h4>Byader</h4>
                    </div>
                  </div>
                  <div className="BranchLocation">
                    <div className="BranchLocationIcons">
                      <CgPin />
                    </div>
                    <div className="BranchLocationTitle">
                      <span></span>
                      <h4> Khalda</h4>
                    </div>
                  </div>
                  <div className="BranchLocation">
                    <div className="BranchLocationIcons">
                      <CgPin />
                    </div>
                    <div className="BranchLocationTitle">
                      <span></span>
                      <h4>Tabrbour</h4>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="ContactContainerAll">
                <div className="ContactContainer">
                  <span></span>
                  <h5>Contact</h5>
                </div>
                <div className="ContactForm">
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="name" placeholder="Name" />
                      <Form.Control type="email" placeholder="E-mail" />
                      <Form.Control type="name" placeholder="Subject" />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Control
                        as="textarea"
                        placeholder="Message"
                        rows={3}
                        className="TextArea"
                      />
                    </Form.Group>
                  </Form>
                </div>
                <div className="ContactInfo">
                  <Row>
                    <Col>
                      <div className="ContactInfoIconAndTextContainer">
                        {" "}
                        <div className="ContactInfoIcon ">
                          {" "}
                          <BiPhone size={25} />
                        </div>
                        <h5 className="UnderlineClass "> +962798089000</h5>
                      </div>

                      <div className="ContactInfoIconAndTextContainer">
                        {" "}
                        <div className="ContactInfoIcon">
                          {" "}
                          <HiOutlineMail size={25} />
                        </div>
                        <h5 className="UnderlineClass">info@alhadaf-int.com</h5>
                      </div>

                      <div className="ContactInfoIconAndTextContainer">
                        {" "}
                        <div className="ContactInfoIcon">
                          {" "}
                          <CgPin size={25} />
                        </div>
                        <h5>
                          Amman, Jordan Marka, behind Jawad bakery Abu dardaa
                          st.
                        </h5>
                      </div>
                    </Col>
                    <Col>
                      <div className="ContactInfoSendAndSocialIcons">
                        <div className="sendbtnContainer">
                          <div className="sendbtn btn"> send</div>
                        </div>
                        <div className="SocialIcons">
                          <div className="SocialIcon">
                            {" "}
                            <FaInstagram size={20} />
                          </div>{" "}
                          <div className="SocialIcon">
                            {" "}
                            <FaFacebookF size={20} />
                          </div>
                          <div className="SocialIcon">
                            {" "}
                            <FaTwitter size={20} />
                          </div>
                          <div className="SocialIcon">
                            {" "}
                            <FaLinkedinIn size={20} />
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Contact;
