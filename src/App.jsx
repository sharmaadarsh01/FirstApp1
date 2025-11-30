import React, { Component } from 'react';
import Contact from './Contact';
import Home from './Home';
import About from './About';
import Count from './Count';
import RandomName from './RandomName';
import './App.css';



export default class App extends Component {
  render() {
    const name1 = "Divya"
    return (
    
      <div>
        <h1>App</h1>
        <p>Thank You</p>
        <Home />
        <About n={name1} />
        <Contact />
        <Count />
        <RandomName />
        </div>
    )
  }
}


