import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import { connect } from 'react-redux';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';

import * as actions from '../actions';

const theme = createMuiTheme();

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <Grid container>
            <Header />
            <Grid container justify="center">
              <Grid item xs={12} sm={6}>
                <Route path="/" exact component={Landing} />
                <Route path="/dashboard" exact component={Dashboard} />
              </Grid>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
