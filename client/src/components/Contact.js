import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import styles from '../styling';

class Contact extends Component {
  render() {
    return (
      <div className={this.props.classes.containerSpacing}>
        <Typography type="display2" gutterBottom>
          Contact
        </Typography>
        <Paper className={this.props.classes.containerSpacing}>
          <Typography type="body1" gutterBottom>
            For any questions, feedback or just to say hi, you can email Andrew
            at{' '}
            <a href="mailto:support@andrewgolightly.com">
              support@andrewgolightly.com
            </a>
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Contact);
