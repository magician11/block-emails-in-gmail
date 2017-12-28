import React from 'react';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import styles from '../styling';

const Landing = props => {
  return (
    <Paper className={props.classes.spacing}>
      <Typography type="display2" gutterBottom>
        Automatically & Permanently Delete Unwanted Emails
      </Typography>
      <Typography type="title" gutterBottom>
        Why use this?
      </Typography>
      <Typography type="body1" gutterBottom>
        Currently, Gmail offers a way to filter certain emails to the Trash or
        Spam. This isn't good enough if you are tempted to check those folders,
        as emails stay in those folders for 30 days before getting automatically
        deleted. This service will automatically and permanently delete the
        emails from your Bin every hour.
      </Typography>
      <Typography type="title" gutterBottom>
        Sooo... like when would I need this?
      </Typography>
      <Typography type="body1" gutterBottom>
        Ever blocked someone and yet kept checking your Bin or Spam in Gmail?
        This will make sure that any messages they send you will be permanently
        deleted from those folders before you get a chance to read them.
        Temptation removed :)
      </Typography>
    </Paper>
  );
};

export default withStyles(styles)(Landing);
