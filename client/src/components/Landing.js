import React from 'react';
import { connect } from 'react-redux';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Loader from './Loader';
import { Link } from 'react-router-dom';
import Mops from '../images/mops.jpg';
import styles from '../styling';

const LandingPage = props => {
  let content;
  if (props.user) {
    content = (
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
          {!props.user && (
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
  } else {
    content = <Loader />;
  }

  return content;
};

const mapStateToProps = ({ user }) => {
  return { user };
};

export default connect(mapStateToProps)(withStyles(styles)(LandingPage));
