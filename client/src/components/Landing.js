import React from 'react';
import { connect } from 'react-redux';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { Link } from 'react-router-dom';
import LoveImage from '../images/hands-on-heart.jpg';
import styles from '../styling';

const LandingPage = props => {
  return (
    <div>
      <Card>
        <CardMedia
          image={LoveImage}
          title="Love Yourself"
          className={props.classes.mediaImage}
        />
        <CardContent>
          <Typography type="display2">Love Yourself</Typography>
          <Typography type="headline" gutterBottom>
            Tools To Help You Help Yourself
          </Typography>
          <Typography type="body1" gutterBottom>
            As an IT professional and counsellor, I am in a unique position to
            be able to build technical solutions to help improve our personal
            lives.
          </Typography>
        </CardContent>
      </Card>
      <div className={props.classes.containerSpacing}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Paper className={props.classes.containerSpacing}>
              <Typography type="subheading" gutterBottom>
                Frequently Clear Unwanted Emails
              </Typography>
              <Typography gutterBottom type="body1">
                Maybe you need to set some boundaries with someone and send all
                their emails to the Trash in Gmail. You've setup that filter,
                but the problem is that Gmail automatically clears your Trash
                only every 30 days. So if you're tempted to check the Trash
                during those 30 days, you essentially could be causing yourself
                harm. What if you had a digital assistant that automatically
                cleared your Trash more frequently? Well now it's here.
              </Typography>
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
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={props.classes.containerSpacing}>
              <Typography type="subheading" gutterBottom>
                Deep Connections
              </Typography>
              <Typography gutterBottom type="body1">
                An app containing questions to catalyse more meaningful
                conversations, and ultimately more intimacy, depth and
                connection with another.
              </Typography>
              <Button
                dense
                color="primary"
                href="https://createdeepconnections.com/"
              >
                Download For Free
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

const mapStateToProps = ({ user }) => {
  return { user };
};

export default connect(mapStateToProps)(withStyles(styles)(LandingPage));
