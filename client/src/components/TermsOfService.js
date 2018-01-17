import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import styles from '../styling';

class TermsOfService extends Component {
  render() {
    return (
      <div>
        <Typography type="display2" gutterBottom>
          Terms of Service
        </Typography>
        <Paper className={this.props.classes.containerSpacing}>
          <Typography type="body1" gutterBottom>
            While every care is taken to ensure that your personal data is
            secure, and that the app functions as indicated, by using this app
            you agree to use it entirely at your own risk.
          </Typography>
          <Typography type="body1" gutterBottom>
            We will not be held liable for any damage or loss that might occur
            from using this service.
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(TermsOfService);
