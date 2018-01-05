import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import styles from '../styling';

class PrivacyPolicy extends Component {
  render() {
    return (
      <div className={this.props.classes.containerSpacing}>
        <Typography type="display2" gutterBottom>
          Privacy Policy
        </Typography>
        <Paper className={this.props.classes.containerSpacing}>
          <Typography type="body1" gutterBottom>
            This app stores your name, email address, photo and refresh token
            only.
          </Typography>
          <Typography type="body1" gutterBottom>
            We only use this information to show your personal settings in the
            app, and the refresh token is used to get an access token to access
            your Gmail account to clear the folders you have chosen.
          </Typography>
          <Typography type="body1" gutterBottom>
            Your information will never be sold or given to a 3rd party.
          </Typography>
          <Typography type="body1" gutterBottom>
            You can contact me to delete your information at any time.
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(PrivacyPolicy);
