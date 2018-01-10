import React from 'react';
import { connect } from 'react-redux';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';
import Mops from '../images/mops.jpg';
import styles from '../styling';

const LandingPage = props => {
  return (
    <Card>
      <CardMedia
        image={Mops}
        title="Gmail Blocker"
        className={props.classes.mediaImage}
      />
      <CardContent>
        <Typography type="display2">Gmail Blocker</Typography>
        <Typography type="headline" gutterBottom>
          Frequently Clear Unwanted Emails
        </Typography>
        <Typography>
          Gmail automatically clears your Bin folder only every 30 days. Gmail
          Blocker improves on that by doing it every hour.
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
