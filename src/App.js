import "./Assets/Style/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import Header from "./Components/Blocks/header";
import HomePage from "./Components/Pages/HomePage";
import AboutPage from "./Components/Pages/AboutPage";
import Footer from "./Components/Blocks/Footer";
import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
class App extends Component {
    render() {
        return (
            <div id="app">
                <Header />
                <HomePage />

                <Footer />
            </div>
        );
    }
}

export default App;
