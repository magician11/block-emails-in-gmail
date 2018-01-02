import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import { withStyles } from 'material-ui/styles';
// import Reboot from 'material-ui/Reboot'; // will be pushed to npm soon hopefully
import Grid from 'material-ui/Grid';
import { connect } from 'react-redux';
import Header from './Header';
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
    let content;
    if (this.props.user) {
      content = (
        <Grid container>
          <Header />
          <Grid container justify="center">
            <Grid item xs={12} sm={10} md={6}>
              <Route path="/" component={Dashboard} />
            </Grid>
          </Grid>
        </Grid>
      );
    } else if (this.props.user === false) {
      content = <Landing />;
    } else {
      content = (
        <Grid
          container
          justify="center"
          alignItems="center"
          className={this.props.classes.fullHeight}
        >
          <CircularProgress />
        </Grid>
      );
    }

    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>{content}</MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return { user };
};

export default connect(mapStateToProps, actions)(withStyles(styles)(App));
