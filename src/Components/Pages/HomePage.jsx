import { Component } from "react";
import Welcome from "../Blocks/Welcome";
import About from "../Blocks/About";
import TwoStarLists from "../Blocks/TwoStarLists";
import OurVMCP from "../Blocks/Ourvmcp";
import ProductsTitle from "../Blocks/ProductsTitle";
import Catalogue from "../Blocks/Catalogue";
import Cataloguebtn from "../Blocks/Cataloguebtn";
import Facts from "../Blocks/Facts";
import CompanyNews from "../Blocks/CompanyNews";
import Team from "../Blocks/Team";
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
        <ProductsTitle />
        <Catalogue />
        <Cataloguebtn />
        <Facts />
        <CompanyNews />
        <Team />
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
