import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return '';
      case false:
        return <a href="/auth/google">Login</a>;
      default:
        return <a href="/api/logout">Logout</a>;
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper purple darken-4">
          <div className="row">
            <div className="col s12">
              <Link
                to={this.props.auth ? '/dashboard' : '/'}
                className="brand-logo"
              >
                Gmail Blocker
              </Link>
              <ul id="nav-mobile" className="right">
                <li>{this.renderContent()}</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
