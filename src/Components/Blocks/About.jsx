import { Component } from 'react';
import '../../Assets/Style/Components/Blocks/_about.scss'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


class About extends Component{
  render(){
    return(
      <div className="About">
        <Container>
          <div className="About1">
            <Row>
            <Col xl={6} lg={6}  md={6} sm={12}>  <div className="About-img-container">  <img className="" src="images/building2.jpg" />  </div> </Col>
              <Col xl={6} lg={6}  md={6} sm={12} >
                <div className="About-text-container">
                  <div><h6></h6><h5>	&nbsp; ABOUT US</h5>          </div>
                <div>
                   <p>
                    In the heart of Amman, Jordan, you will find Alhadaf International Company. We are considered to be one of the top manufacturers of food packaging and disposables for households and the foodservice industry in the region. We pride ourselves on delivering high-quality products at very competitive prices. Our leaders challenge us everyday to go beyond what we have promised our customers, the best quality products and service at competitive prices. This commitment is combined with our passion to ensure that our customers, both local and global, have a seamless journey from start to finish and hence keep coming back to us again and again.
With state-of-the-art machinery combined with our in depth production and quality knowledge gained from our over 20 years’ experience, we ensure that our products are top quality. Throughout the company we focus on continuous improvement, we strive to exceed our customer expectations. We pride ourselves on understanding what our customers require. Alhadaf renowned production flexibility allows us to meet our customers’ requirements.
We can customize our products to any channel’s requirements.
product range expanded recently to include our eco-friendly products, recyclable and (Biodegradable)
                    </p>
                   </div>
                </div>
              </Col>
             
            </Row>
            <div className="two-lists">
                <ul>
                    <li>in Alhadaf, are focused on sustainability from our raw materials to our manufacturing to our logistics.</li>
                    <li>  in the end, it is the people in Alhadaf who make us different. Every day, we endeavour to make sure that you, the customer is happy with us, our products and our service. With our energy, passion and our commitment, we aim to make Alhadaf the best food packaging company in the world.</li>
                </ul>
            </div>
          </div>
          </Container>
      </div>
    )}
}


export default About;