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
        const onFieldChange = (name, value) => this.setState({ fields: { ...fields, [name]: value }, errors: { name: "", email: "", message: "", subject: "" } });

        return (
            <div className="Contact" id="Contact">
                <Container>
                    <Row className="row1">
                        {/* Map Section Start */}
                        <Col Col={6}>
                            <div className="LocationPickerExample">
                                {/* <LocationPicker containerElement={<div style={{ height: "100%" }} />} mapElement={<div className="CustomMapView" />} onChange={this.handleLocationChange} defaultPosition={defaultPosition} circleOptions={{ visible: false }} /> */}

                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.577205211585!2d35.99852782633892!3d31.99483310680974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b60d4671037c7%3A0x10c9531afc09e061!2zQWxoYWRhZiBpbnRsIENvLiBmb3IgaW1wb3J0aW5nICYgaW5kdXN0cnkg2KfZhNmH2K_ZgSDYp9mE2K_ZiNmE2YrYqSDZhNmE2KfYs9iq2YrYsdin2K8g2Ygg2KfZhNi12YbYp9i52KkgUlo!5e0!3m2!1sen!2sjo!4v1631544661040!5m2!1sen!2sjo"
                                    width={"100%"}
                                    height={450}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                ></iframe>

                                {/* <div className="BranchLocations">
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
                                </div>*/}
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
                                                    {this.props.social.map(({ title }) => {
                                                        return <div className="SocialIcon">{title == "facebook" ? <a href="https://www.facebook.com/rzproducts/" style={{color:'#fff'}}><FaFacebookF size={20} /></a> : title == "instagram" ? <a href="https://instagram.com/rzproducts?utm_medium=copy_link" style={{color:'#fff'}}><FaInstagram size={20} /></a> : title == "linkedIn" ? <a href="https://www.linkedin.com/company/alhadaf-intl-co.-for-importing-&-industry-rzproducts-" style={{color:'#fff'}}><FaLinkedinIn size={20} /></a> :  null}</div>;
                                                    })}
                                                    {/* <div className="SocialIcon">
                                                        {" "}
                                                        <FaFacebookF size={20} />
                                                    </div>
                                                    <div className="SocialIcon">
                                                        {" "}
                                                        <FaTwitter size={20} />
                                                    </div>
                                                    <div className="SocialIcon">
                                                        {" "}
                                                    </div> */}
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
                console.log(handelErrors, "erros");
                return;
            } else {
                return displayAlert("Error", message, "error");
            }
        }

        displayAlert("Done", "Message Sent", "success").then(() => this.setState({ fields: { name: "", email: "", message: "", subject: "" } }));
    };
}
export default Contact;
