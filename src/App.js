import React, { Component } from 'react';
import Hoc from './HOC/hoc'
import Page from './components/page'
import {HashRouter,Route} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div>
          <HashRouter>
              <div>
                  <Route exact path='/' component={Page}></Route>
                  <Route path='/hoc' component={Hoc}></Route>
              </div>
          </HashRouter>
      </div>
    );
  }
}

export default App;
