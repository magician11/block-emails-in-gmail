import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Typography from 'material-ui/Typography';
import { CircularProgress } from 'material-ui/Progress';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';
import Switch from 'material-ui/Switch';
import styles from '../styling';
import * as actions from '../actions';

class Dashboard extends Component {
  handleSwitch = (event, checked) => {
    console.log(event, checked);
    this.props.toggleTrashClearing(checked);
  };
  render() {
    const { user, classes } = this.props;
    let content;
    // if user is currently null, we're still waiting on auth status
    if (user === null) {
      content = <CircularProgress />;
    } else if (user !== false) {
      content = (
        <div>
          <Typography type="display2" gutterBottom>
            Hi {user.firstName}!
          </Typography>
          <Chip label={user.emailAddress} />
          <Grid item xs={12} md={3}>
            <Paper className={classes.spacing}>
              <Typography type="body1" gutterBottom>
                Turn on to automatically and permanently delete all messages in
                your Bin folder every hour.
              </Typography>
              <Switch checked={user.clearTrash} onChange={this.handleSwitch} />
            </Paper>
          </Grid>
        </div>
      );
      /*
      if the user is false, they're not authed to view this page, so redirect to landing page
      */
    } else {
      content = <Redirect to="/" />;
    }
    return <div className={classes.spacing}>{content}</div>;
  }
}

const mapStateToProps = ({ user }) => {
  return { user };
};

export default connect(mapStateToProps, actions)(withStyles(styles)(Dashboard));
