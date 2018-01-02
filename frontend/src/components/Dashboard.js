import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';
import Switch from 'material-ui/Switch';
import styles from '../styling';
import * as actions from '../actions';

class Dashboard extends Component {
  handleSwitch = (event, checked) => {
    this.props.toggleTrashClearing(checked);
  };

  render() {
    const { user, classes } = this.props;

    return (
      <div className={classes.containerSpacing}>
        <Typography type="display2" gutterBottom>
          Hi {user.firstName}!
        </Typography>
        <Chip label={user.emailAddress} />
        <Paper className={classes.containerSpacing}>
          <Typography type="body1" gutterBottom>
            Turn this on to automatically and permanently delete all messages in
            your Bin folder every hour.
          </Typography>
          <Switch checked={user.clearTrash} onChange={this.handleSwitch} />
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return { user };
};

export default connect(mapStateToProps, actions)(withStyles(styles)(Dashboard));
