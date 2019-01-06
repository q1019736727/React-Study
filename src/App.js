import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>hello world</p>
          <Button></Button>
        </header>
      </div>
    );
  }
}

export default App;
