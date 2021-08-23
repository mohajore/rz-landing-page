import './Assets/Style/main.scss'
import { Component } from 'react';
import Header from './Components/Blocks/header';
import Welcome from './Components/Blocks/Welcome';
import About from './Components/Blocks/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Draft from './Components/Blocks/draft';
import OurVMCP from './Components/Blocks/Ourvmcp';
import SmallRedLine from './Components/Blocks/SmallRedLine';
import Catalogue from './Components/Blocks/Catalogue';
import Cataloguebtn from './Components/Blocks/Cataloguebtn';
import Facts from './Components/Blocks/Facts';
// import CompanyNews from './ Components/Blocks/CompanyNews';
import TEA from './Components/Blocks/TEA';
import SustainablePackaging from './Components/Blocks/SustainablePackaging';
import CustomizedFoodPackaging from './Components/Blocks/CustomizedFoodPackaging';
import Contact from './Components/Blocks/Contact';
import Gallary from './Components/Blocks/Gallary';
import Footer from './Components/Blocks/Footer';
class App extends Component{
  render(){
    return(
      <div id="app">
        <Header/>
        <Welcome/>
        <About/>
        <Draft/>
        <OurVMCP/>
        <SmallRedLine/>
        <Catalogue/>
        <Cataloguebtn/>
        <Facts/>
        {/* <CompanyNews/> */}
        <TEA/>
        <SustainablePackaging/>
        <CustomizedFoodPackaging/>
        <Contact/>
        <Gallary/>
        <Footer/>
      </div>
    )}
}

export default App