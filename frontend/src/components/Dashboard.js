import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import '../styling/dashboard.css';

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchUserProfile();
  }

  renderContent() {
    if (this.props.profile) {
      const { displayName, emails, image, name } = this.props.profile;
      return (
        <div>
          <h2>Hi {name.givenName}!</h2>
          <div className="chip">
            <img src={image.url} alt={displayName} />
            {emails[0].value}
          </div>
          <div className="switch">
            <p className="flow-text">
              Would you like us to automatically and permanently delete all the
              messages in your Bin folder every 5 minutes?
            </p>
            <label>
              No thanks
              <input type="checkbox" />
              <span className="lever" />
              Yes please
            </label>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h3>Loading...</h3>
          <div className="progress">
            <div className="indeterminate" />
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <section className="dashboard">
        <div className="container">{this.renderContent()}</div>
      </section>
    );
  }
}

const mapStateToProps = ({ profile }) => {
  return { profile };
};

export default connect(mapStateToProps, actions)(Dashboard);
