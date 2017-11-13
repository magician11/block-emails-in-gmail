import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import Error from './Error';
import Footer from './Footer';

import * as actions from '../actions';

import 'materialize-css/dist/css/materialize.min.css';
import '../styling/root.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Landing} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/error" exact component={Error} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
