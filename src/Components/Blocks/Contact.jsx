import React, { Component } from "react";
import "../../Assets/Style/Components/Blocks/_welcome.scss";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import LocationPicker from "react-location-picker";
import Form from "react-bootstrap/Form";
import { BiPhone } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { CgPin } from "react-icons/cg";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import TextInput from "./TextInput";
import { generalServices } from "../../services/GeneralServices";
import { displayAlert, getResponseErrors } from "../../utils/misc";
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
        fields: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
        errors: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    };

    // handle location change ////
    handleLocationChange = ({ position }) => {
        // Set new location
        this.setState({ position });
    };
    render() {
        const { defaultPosition, fields, errors } = this.state;
        const onFieldChange = (name, value) => this.setState({ fields: { ...fields, [name]: value }, errors: { name: "", email: "", message: "" } });

        return (
            <div className="Contact">
                <Container>
                    <Row className="row1">
                        {/* Map Section Start */}
                        <Col Col={6}>
                            <div className="LocationPickerExample">
                                <LocationPicker containerElement={<div style={{ height: "100%" }} />} mapElement={<div className="CustomMapView" />} onChange={this.handleLocationChange} defaultPosition={defaultPosition} circleOptions={{ visible: false }} />
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
                        {/* Map Section End */}
                        {/* Form & Contact Info & Social Section Start */}
                        <Col md={6}>
                            <div className="ContactContainerAll">
                                {/* Contact Title Start */}
                                <div className="ContactContainer">
                                    <span></span>
                                    <h5>Contact</h5>
                                </div>
                                {/* Contact Title End */}
                                {/* Contact Form Start */}
                                <div className="ContactForm">
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <TextInput name="name" label="" placeholder="Name" value={fields.name} onFieldChange={onFieldChange} validate={errors.name} />
                                            <TextInput name="email" label="" placeholder="email" value={fields.email} onFieldChange={onFieldChange} validate={errors.email} />
                                            <TextInput name="subject" label="" placeholder="subject" value={fields.subject} onFieldChange={onFieldChange} validate={errors.subject} />
                                            <TextInput name="message" label="" placeholder="message" value={fields.message} onFieldChange={onFieldChange} validate={errors.message} isTextArea={false} />
                                        </Form.Group>
                                        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        </Form.Group> */}
                                    </Form>
                                </div>
                                {/* Contact Form End */}
                                <div className="ContactInfo">
                                    <Row>
                                        {/* Contact info Start */}
                                        <Col>
                                            <div className="ContactInfoIconAndTextContainer">
                                                {" "}
                                                <div className="ContactInfoIcon ">
                                                    {" "}
                                                    <BiPhone size={25} />
                                                </div>
                                                <h5 className="UnderlineClass ">+962798089000</h5>
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
                                                <h5>Amman, Jordan Marka, behind Jawad bakery Abu dardaa st.</h5>
                                            </div>
                                        </Col>
                                        {/* Contact info End */}
                                        {/* Contact Social  Start */}
                                        <Col>
                                            <div className="ContactInfoSendAndSocialIcons">
                                                <div className="sendbtnContainer">
                                                    <div className="sendbtn" onClick={this.submit}>
                                                        {" "}
                                                        send
                                                    </div>
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
                                        {/* Contact Socail End */}
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        {/* Form & Contact Info & Social Section End */}
                    </Row>
                </Container>
            </div>
        );
    }

    submit = async () => {
        const { fields } = this.state;
        const { success, data, message, errors } = await generalServices.sendContactMessage(fields);

        if (!success) {
            if (errors) {
                const handelErrors = getResponseErrors(errors);
                this.setState({
                    errors: handelErrors,
                });
                return;
            } else {
                return displayAlert("Error", message, "error");
            }
        }

        console.log(data, "data.user");

        displayAlert("Done", "Message Sent", "success").then(() => this.setState({ fields: { name: "", email: "", message: "" } }));
    };
}
export default Contact;
