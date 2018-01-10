import React from 'react';
import { connect } from 'react-redux';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';
import LoveInLights from '../images/love-in-lights.jpg';
import styles from '../styling';

const LandingPage = props => {
  return (
    <Card>
      <CardMedia
        image={LoveInLights}
        title="Love Yourself"
        className={props.classes.mediaImage}
      />
      <CardContent>
        <Typography type="display2">Love Yourself</Typography>
        <Typography type="headline" gutterBottom>
          Tools To Help You Help Yourself
        </Typography>
        <Typography type="body1" gutterBottom>
          As an IT professional and counsellor, I can build technical solutions
          to some emotional challenges.
        </Typography>
        <Typography type="subheading" className={props.classes.topTitleMargin}>
          Frequently Clear Unwanted Emails
        </Typography>
        <Typography>
          Maybe you need to set some boundaries with someone and send all their
          emails to the Bin in Gmail. You've setup that filter, but the problem
          is that Gmail automatically clears your Bin folder only every 30 days.
          So if you're tempted to check the Bin folder during those 30 days, you
          essentially could be causing yourself harm. What if you had a digital
          assistant that automatically cleared that Bin folder every hour? Well
          now it's here.
        </Typography>
      </CardContent>

      <CardActions>
        {props.user.profile ? (
          <Button dense color="primary" component={Link} to="/dashboard">
            Go to Dashboard
          </Button>
        ) : (
          <Button dense color="primary" href="/auth/google">
            Sign In
          </Button>
        )}
        <Button dense color="primary" component={Link} to="/faq">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

const mapStateToProps = ({ user }) => {
  return { user };
};

export default connect(mapStateToProps)(withStyles(styles)(LandingPage));
