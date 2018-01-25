import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Collapse from 'material-ui/transitions/Collapse';
import Button from 'material-ui/Button';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Grid from 'material-ui/Grid';
import Switch from 'material-ui/Switch';
import styles from '../styling';
import Loader from './Loader';
import * as actions from '../actions';

class Dashboard extends Component {
  state = {
    showEmails: false
  };

  componentDidMount() {
    this.props.getFilters();
  }

  handleSwitch = (event, checked) => {
    this.props.toggleBinClearing(checked);
  };

  toggleShowFilters = () => {
    this.setState({ showEmails: !this.state.showEmails });
  };

  extractEmailSentToBin = () =>
    this.props.user.filters.filter(
      filter => filter.action.addLabelIds[0] === 'TRASH'
    );

  renderFilters = filters =>
    filters.map(filter => {
      return (
        <ListItem key={filter.id}>
          <ListItemText primary={filter.criteria.from} />
        </ListItem>
      );
    });

  render() {
    const { user, classes } = this.props;
    let dashboardContent;

    if (user.profile && user.filters) {
      const emailsToBin = this.extractEmailSentToBin();
      dashboardContent = (
        <Grid container justify="space-around">
          <Grid item xs={12}>
            <Typography type="display2" gutterBottom>
              Hi {user.profile.firstName}!
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography type="body1" gutterBottom>
              Gmail account: <strong>{user.profile.emailAddress}</strong>
            </Typography>
            <Typography type="body1" gutterBottom>
              Account type: <strong>free</strong>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography type="body1" gutterBottom>
              Status of frequently deleting all items in your Trash:{' '}
              <strong>
                {user.profile.clearBinFolder ? 'Active' : 'Deactivated'}
              </strong>
            </Typography>
            <Typography type="body1" gutterBottom>
              How often your Trash is cleared: <strong>every 3 days</strong>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.containerSpacing}>
              <Typography type="body1" gutterBottom>
                Set this switch to on to automatically and permanently delete
                all messages in your Trash.
              </Typography>
              <Switch
                checked={user.profile.clearBinFolder}
                onChange={this.handleSwitch}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.containerSpacing}>
              <Typography type="headline" gutterBottom>
                Filters
              </Typography>
              <Typography type="body1" gutterBottom>
                Emails auto sent to Trash: {emailsToBin.length}
              </Typography>
              {emailsToBin.length > 0 && (
                <Button color="primary" onClick={this.toggleShowFilters}>
                  {this.state.showEmails ? 'Hide' : 'Show'} emails
                </Button>
              )}
              <Collapse in={this.state.showEmails} timeout="auto" unmountOnExit>
                <List dense>{this.renderFilters(emailsToBin)}</List>
              </Collapse>
            </Paper>
          </Grid>
        </Grid>
      );
    } else {
      dashboardContent = <Loader />;
    }

    return (
      <div className={this.props.classes.containerSpacing}>
        {dashboardContent}
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return { user };
};

export default connect(mapStateToProps, actions)(withStyles(styles)(Dashboard));
