import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import styles from '../styling';

class FAQ extends Component {
  render() {
    return (
      <div className={this.props.classes.containerSpacing}>
        <Typography type="display2" gutterBottom>
          FAQ
        </Typography>
        <Paper className={this.props.classes.containerSpacing}>
          <Typography type="title" gutterBottom>
            What does this app do?
          </Typography>
          <Typography type="body1" gutterBottom>
            It deletes all emails in your Bin folder every hour.
          </Typography>
          <Typography
            type="title"
            gutterBottom
            className={this.props.classes.topTitleMargin}
          >
            Why would someone use this?
          </Typography>
          <Typography type="body1" gutterBottom>
            Gmail only automatically deletes emails every 30 days.
          </Typography>
          <Typography type="body1" gutterBottom>
            So maybe you just want your Bin more regularly cleared out just
            because you want it that way.
          </Typography>
          <Typography type="body1" gutterBottom>
            Maybe you've specifically setup a filter to move emails from certain
            people to your Bin. And to remove the temptation of checking those
            emails before the 30 days is up, this will service will clear those
            emails for you removing the temptation.
          </Typography>
          <Typography
            type="title"
            gutterBottom
            className={this.props.classes.topTitleMargin}
          >
            Does this do anything will any of my other emails?
          </Typography>
          <Typography type="body1" gutterBottom>
            No. This app will only delete all emails from your Bin if you turn
            that setting on.
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(FAQ);
