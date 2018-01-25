import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Reboot from 'material-ui/Reboot';
import Grid from 'material-ui/Grid';
import { connect } from 'react-redux';
import Header from './Header';
import PrivacyPolicy from './PrivacyPolicy';
import Contact from './Contact';
import Landing from './Landing';
import TermsOfService from './TermsOfService';
import FAQ from './FAQ';
import Dashboard from './Dashboard';

import * as actions from '../actions';

const theme = createMuiTheme();

class App extends Component {
  constructor() {
    super();
    ReactGA.initialize('UA-63340534-5');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <Reboot />
          <Header />
          <Grid container justify="center" spacing={0}>
            <Grid item xs={12} sm={10} md={8}>
              <Route path="/" exact component={Landing} />
              <Route path="/dashboard" exact component={Dashboard} />
              <Route path="/faq" exact component={FAQ} />
              <Route path="/privacy-policy" exact component={PrivacyPolicy} />
              <Route path="/terms" exact component={TermsOfService} />
              <Route path="/contact" exact component={Contact} />
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

export default connect(mapStateToProps, actions)(App);
