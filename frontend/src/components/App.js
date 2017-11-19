import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';

import * as actions from '../actions';

const theme = createMuiTheme();

const styles = theme => ({
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  })
});

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
            <Grid item xs={12}>
              <Paper className={this.props.classes.paper}>
                <Route path="/" exact component={Landing} />
                <Route path="/dashboard" exact component={Dashboard} />
              </Paper>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(withStyles(styles)(App));
