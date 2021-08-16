import './Assets/Style/main.scss'
import { Component } from 'react';
import Header from './Components/Blocks/header';
import Welcome from './Components/Blocks/Welcome';
import About from './Components/Blocks/About';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component{
  render(){
    return(
      <div id="app">
        <Header/>
        <Welcome/>
        <About/>


      </div>
    )}
}

export default App