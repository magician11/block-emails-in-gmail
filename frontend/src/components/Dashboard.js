import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from 'material-ui/Typography';
import { CircularProgress } from 'material-ui/Progress';

class Dashboard extends Component {
  render() {
    let content;
    if (this.props.user) {
      content = (
        <div>
          <Typography type="display2" gutterBottom>
            Hi {this.props.user.firstName}!
          </Typography>
          <Typography type="body1" gutterBottom>
            Would you like us to automatically and permanently delete all the
            messages in your Bin folder every 5 minutes?
          </Typography>
        </div>
      );
    } else {
      content = <CircularProgress />;
    }
    return <div>{content}</div>;
  }
}

const mapStateToProps = ({ user }) => {
  return { user };
};

export default connect(mapStateToProps, null)(Dashboard);
