import './Assets/Style/main.scss'
import { Component } from 'react';
import Header from './Components/Blocks/header';
import Welcome from './Components/Blocks/Welcome';
import About from './Components/Blocks/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Draft from './Components/Blocks/draft';
import OurVMCP from './Components/Blocks/Ourvmcp';
import SmallRedLine from './Components/Blocks/SmallRedLine';

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

      </div>
    )}
}

export default App