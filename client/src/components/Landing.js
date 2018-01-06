import React from 'react';
import Button from 'material-ui/Button';
import GoIcon from 'material-ui-icons/PlayArrow';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import styles from '../styling';

const LandingPage = props => {
  return (
    <div className={props.classes.containerSpacing}>
      <Typography type="display2">Gmail Blocker</Typography>
      <Typography type="headline" gutterBottom>
        Frequently Clear Unwanted Emails
      </Typography>
      <Typography
        type="title"
        gutterBottom
        className={props.classes.topTitleMargin}
      >
        What does this do?
      </Typography>
      <Typography type="body1" gutterBottom>
        Gmail automatically deletes blocked emails only after 30 days. This
        service does it for you every hour.
      </Typography>
      <Button color="primary" href="/auth/google">
        Sign In
        <GoIcon />
      </Button>
      <Typography
        type="title"
        gutterBottom
        className={props.classes.topTitleMargin}
      >
        Details please...
      </Typography>
      <Typography type="body1" gutterBottom>
        When you block someone in Gmail, future emails from that address gets
        filtered to Spam. You can also setup a filter to automatically send
        emails to the Bin.
      </Typography>
      <Typography type="body1" gutterBottom>
        Emails in Spam and the Bin normally get automatically deleted only every
        30 days.
      </Typography>
      <Typography type="body1" gutterBottom>
        If for whatever reason you're tempted to check the emails you've been
        filtering, you have a whole month to think about it. The temptation is
        alive for a while.
      </Typography>
      <Typography type="body1" gutterBottom>
        This service will automatically and permanently delete all the emails
        from your Bin every hour. Temptation gone!
      </Typography>
      <Typography
        type="title"
        gutterBottom
        className={props.classes.topTitleMargin}
      >
        Ready to do this?
      </Typography>
      <Button color="primary" href="/auth/google">
        Sign In
        <GoIcon />
      </Button>
      <Typography
        type="title"
        gutterBottom
        className={props.classes.topTitleMargin}
      >
        Still have some questions?
      </Typography>
      <Typography type="body1" gutterBottom>
        Ok sure thing. Contact Andrew{' '}
        <a
          href="https://www.golightlyplus.com/contact"
          className={props.classes.link}
        >
          here
        </a>.
      </Typography>
      <hr />
      <Typography type="body1" align="center">
        <a href="https://www.golightlyplus.com" className={props.classes.link}>
          &copy; {new Date().getFullYear()} Golightly+
        </a>
      </Typography>
    </div>
  );
};

export default withStyles(styles)(LandingPage);
