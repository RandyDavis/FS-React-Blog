import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header/Header';
import Dashboard from './Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <div className="container">
            <Route exact path="/blogs" component={ Dashboard } />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
