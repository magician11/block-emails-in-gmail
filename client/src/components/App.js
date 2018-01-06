import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { withStyles } from 'material-ui/styles';
import Reboot from 'material-ui/Reboot';
import Grid from 'material-ui/Grid';
import { connect } from 'react-redux';
import Header from './Header';
import PrivacyPolicy from './PrivacyPolicy';
import Contact from './Contact';
import Landing from './Landing';
import Dashboard from './Dashboard';
import styles from '../styling';

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
          <Reboot />
          <Grid container>
            <Header />
            <Grid container justify="center">
              <Grid item xs={12} sm={10} md={6}>
                <Route path="/" exact component={Landing} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/privacy-policy" exact component={PrivacyPolicy} />
                <Route path="/contact" exact component={Contact} />
              </Grid>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return { user };
};

export default connect(mapStateToProps, actions)(withStyles(styles)(App));
