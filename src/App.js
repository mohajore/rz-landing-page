import './Assets/Style/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Header from './Components/Blocks/header';
import HomePage from './Components/Pages/HomePage';
import Footer from './Components/Blocks/Footer';
class App extends Component{
  render(){
    return(
      <div id="app">
        <Header/>
        <HomePage/>
        <Footer/>  
      </div>
    )}
}

export default App