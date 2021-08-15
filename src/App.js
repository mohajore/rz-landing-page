import './Assets/Style/main.scss'
import { Component } from 'react';
import Header from './Components/Blocks/header';
import Welcome from './Components/Blocks/Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component{
  render(){
    return(
      <div id="app">
        <Header/>
        <Welcome/>



      </div>
    )}
}

export default App