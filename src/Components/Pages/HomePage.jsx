import { Component } from "react";
import "../../Assets/Style/Components/Blocks/_welcome.scss";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Welcome from "../Blocks/Welcome";
import About from "../Blocks/About";
import TwoStarLists from "../Blocks/TwoStarLists";
import OurVMCP from "../Blocks/Ourvmcp";
import SmallRedLine from "../Blocks/SmallRedLine";
import Catalogue from "../Blocks/Catalogue";
import Cataloguebtn from "../Blocks/Cataloguebtn";
import Facts from "../Blocks/Facts";
import CompanyNews from "../Blocks/CompanyNews";
import TEA from "../Blocks/TEA";
import SustainablePackaging from "../Blocks/SustainablePackaging";
import CustomizedFoodPackaging from "../Blocks/CustomizedFoodPackaging";
import Contact from "../Blocks/Contact";
import Gallary from "../Blocks/Gallary";
import InternalLinks from "../Blocks/InternalLinks";
class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <Welcome />
        <About />
        <TwoStarLists />
        <OurVMCP />
        <SmallRedLine />
        <Catalogue />
        <Cataloguebtn />
        <Facts />
        <CompanyNews />
        <TEA />
        <SustainablePackaging />
        <CustomizedFoodPackaging />
        <Gallary />
        <Contact />
        <InternalLinks />
      </div>
    );
  }
}

export default HomePage;
