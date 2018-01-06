import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';
import Switch from 'material-ui/Switch';
import styles from '../styling';
import Loader from './Loader';
import * as actions from '../actions';

class Dashboard extends Component {
  handleSwitch = (event, checked) => {
    this.props.toggleBinClearing(checked);
  };

  render() {
    const { user, classes } = this.props;
    let dashboardContent;
    if (user) {
      dashboardContent = (
        <div className={classes.containerSpacing}>
          <Typography type="display2" gutterBottom>
            Hi {user.firstName}!
          </Typography>
          <Chip label={user.emailAddress} />
          <Paper className={classes.containerSpacing}>
            <Typography type="body1" gutterBottom>
              Set this switch to on to automatically and permanently delete all
              messages in your Bin folder every hour.
            </Typography>
            <Switch
              checked={user.clearBinFolder}
              onChange={this.handleSwitch}
            />
          </Paper>
        </div>
      );
    } else {
      dashboardContent = <Loader />;
    }

    return <div>{dashboardContent}</div>;
  }
}

const mapStateToProps = ({ user }) => {
  return { user };
};

export default connect(mapStateToProps, actions)(withStyles(styles)(Dashboard));
