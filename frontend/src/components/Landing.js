import React from 'react';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import PlayArrow from 'material-ui-icons/PlayArrow';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import styles from '../styling';

const Landing = props => {
  return (
    <Paper className={props.classes.containerSpacing}>
      <Typography type="display2">Gmail Blocker</Typography>
      <Typography type="headline" gutterBottom>
        Automatically & Permanently Delete Emails
      </Typography>
      <Typography
        type="title"
        gutterBottom
        className={props.classes.topTitleMargin}
      >
        What does this do?
      </Typography>
      <Typography type="body1" gutterBottom>
        Gmail only automatically deletes blocked emails after 30 days. This
        service does it for you every hour.
      </Typography>
      <Button color="primary">
        Great! Sign me up
        <PlayArrow />
      </Button>
      <Typography
        type="title"
        gutterBottom
        className={props.classes.topTitleMargin}
      >
        Details please...
      </Typography>
      <Typography type="body1" gutterBottom>
        When you block someone in Gmail, emails from that address gets filtered
        to Spam. You can also setup a filter to automatically send emails to the
        Bin.
      </Typography>
      <Typography type="body1" gutterBottom>
        Emails in Spam and the Bin get automatically deleted every 30 days.
      </Typography>
      <Typography type="body1" gutterBottom>
        If for whatever reason you're tempted to check the emails you've been
        filtering, you have a whole month to think about it. The temptation is
        alive for a while.
      </Typography>
      <Typography type="body1" gutterBottom>
        This service will automatically and permanently delete all the emails
        from your Bin every hour.
      </Typography>
      <Typography
        type="title"
        gutterBottom
        className={props.classes.topTitleMargin}
      >
        Ready to do this?
      </Typography>
      <Button color="primary">
        Yes! Let's do this
        <PlayArrow />
      </Button>
    </Paper>
  );
};

export default withStyles(styles)(Landing);
