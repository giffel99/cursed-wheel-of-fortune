import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WorldWide from "./assets/worldwide.jpg"
import Index from './components/index';
import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div
        className="App">
        <Index></Index>

      </div>
    );

  }
}

export default App;
