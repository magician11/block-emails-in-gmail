import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import { CircularProgress } from 'material-ui/Progress';
import styles from '../styling';

class Loader extends Component {
  render() {
    return (
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
}

export default withStyles(styles)(Loader);
