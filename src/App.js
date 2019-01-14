import React, { Component } from 'react';
import './App.css';
import FirstCmp from './FirstCmp';
import SecondCmp from './SecondCmp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FirstCmp />
        <SecondCmp />
      </div>
    );
  }
}

export default App;
