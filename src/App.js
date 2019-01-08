import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button'

//HOC组件
import Hoccomponent from './HOC/TemplateComponent'
import Funccomponent from './HOC/FuncComponent'
//

class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-header">
             <Hoccomponent/>
              <Button></Button>
              <Funccomponent></Funccomponent>
          </header>
      </div>
    );
  }
}

export default App;
