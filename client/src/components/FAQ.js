import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import styles from '../styling';

import DownArrowSearch from '../images/down-arrow-search.png';
import EmailAddress from '../images/enter-email-address.png';
import CreateFilter from '../images/create-filter-link.png';
import DeleteCheckbox from '../images/delete-checkbox.png';
import CreateFilterButton from '../images/create-filter-button.png';

class FAQ extends Component {
  render() {
    return (
      <div className={this.props.classes.containerSpacing}>
        <Typography type="display2" gutterBottom>
          FAQ
        </Typography>
        <Paper className={this.props.classes.containerSpacing}>
          <Typography type="title" gutterBottom>
            What does this app do?
          </Typography>
          <Typography type="body1" gutterBottom>
            For free accounts, it deletes all emails in your Trash every hour.
          </Typography>
          <Typography
            type="title"
            gutterBottom
            className={this.props.classes.topTitleMargin}
          >
            Why would someone use this?
          </Typography>
          <Typography type="body1" gutterBottom>
            Gmail only automatically deletes emails every 30 days.
          </Typography>
          <Typography type="body1" gutterBottom>
            So maybe you just want your Trash more regularly cleared out just
            because you want it that way.
          </Typography>
          <Typography type="body1" gutterBottom>
            Maybe you've specifically setup a filter to move emails from certain
            people like an ex to your Trash. And to remove the temptation of
            checking those emails before the 30 days is up, this service will
            clear those emails before you are tempted to check your Trash.
          </Typography>
          <Typography type="body1" gutterBottom>
            Maybe you have privacy concerns. And you want to keep your account
            history of deleted emails clean.
          </Typography>
          <Typography
            type="title"
            gutterBottom
            className={this.props.classes.topTitleMargin}
          >
            How do I automatically send emails to the Trash?
          </Typography>
          <Typography type="body1" gutterBottom>
            Apart from manually deleting emails, you can also setup a filter
            that will send emails to the Trash immediately on receiving them.
          </Typography>
          <Typography type="body1" gutterBottom>
            Step 1. Open Gmail
          </Typography>
          <Typography type="body1" gutterBottom>
            Step 2. Click the little down arrow in the search bar at the top
          </Typography>
          <img
            src={DownArrowSearch}
            alt="down arrow in search bar"
            className={this.props.classes.image}
          />
          <Typography type="body1" gutterBottom>
            Step 3. Type in the email address you want to always send to the
            Trash
          </Typography>
          <img
            src={EmailAddress}
            alt="enter email address"
            className={this.props.classes.image}
          />
          <Typography type="body1" gutterBottom>
            Step 4. Click "Create filter with this search"
          </Typography>
          <img
            src={CreateFilter}
            alt="create filter link"
            className={this.props.classes.image}
          />
          <Typography type="body1" gutterBottom>
            Step 5. Tick "Delete it"
          </Typography>
          <img
            src={DeleteCheckbox}
            alt="tick Delete it"
            className={this.props.classes.image}
          />
          <Typography type="body1" gutterBottom>
            Step 6. Click the "Create filter" button
          </Typography>
          <img
            src={CreateFilterButton}
            alt="create filter button"
            className={this.props.classes.image}
          />
          <Typography
            type="title"
            gutterBottom
            className={this.props.classes.topTitleMargin}
          >
            Does this do anything with any of my other emails?
          </Typography>
          <Typography type="body1" gutterBottom>
            No. This app will only delete all emails from your Trash if you turn
            that setting on.
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(FAQ);
