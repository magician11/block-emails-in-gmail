import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import MenuIcon from 'material-ui-icons/Menu';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import { Link } from 'react-router-dom';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Menu, { MenuItem } from 'material-ui/Menu';
import styles from '../styling';

class Header extends Component {
  state = {
    drawerOpen: false,
    menuOpen: false,
    anchorEl: null
  };

  handleAvatarClick = event => {
    this.setState({ menuOpen: true, anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ menuOpen: false });
  };

  renderUserLogin = () => {
    const { user } = this.props;
    const { anchorEl, menuOpen } = this.state;
    let topMenuBarContent;
    if (user.profile) {
      topMenuBarContent = (
        <div>
          <Avatar
            alt={`${user.profile.firstName} ${user.profile.lastName}`}
            src={user.profile.imageUrl}
            onClick={this.handleAvatarClick}
          />
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            open={menuOpen}
            onClose={this.handleMenuClose}
          >
            <MenuItem onClick={() => (window.location = '/api/logout')}>
              Logout
            </MenuItem>
          </Menu>
        </div>
      );
    } else {
      topMenuBarContent = (
        <Button color="contrast" href="/auth/google">
          Sign In
        </Button>
      );
    }

    return topMenuBarContent;
  };

  toggleDrawer = openState => {
    this.setState({ drawerOpen: openState });
  };

  render() {
    const { classes, user } = this.props;

    return (
      <AppBar position="static">
        <Drawer
          open={this.state.drawerOpen}
          onClose={() => this.toggleDrawer(false)}
          classes={{ paper: classes.drawer }}
        >
          <Typography type="headline" className={classes.drawerPadding}>
            <Link to="/" className={classes.link}>
              Gmail Blocker
            </Link>
          </Typography>
          <Divider />
          <List>
            {user && (
              <ListItem button component={Link} to="/dashboard">
                <ListItemText primary="Dashboard" />
              </ListItem>
            )}
            <ListItem button component={Link} to="/faq">
              <ListItemText primary="FAQ" />
            </ListItem>
            <ListItem button component={Link} to="/privacy-policy">
              <ListItemText primary="Privacy Policy" />
            </ListItem>
            <ListItem button component={Link} to="/terms">
              <ListItemText primary="Terms of Service" />
            </ListItem>
            <ListItem button component={Link} to="/contact">
              <ListItemText primary="Contact" />
            </ListItem>
            <Divider />
          </List>
          <Typography
            type="body1"
            color="inherit"
            className={classes.drawerPadding}
          >
            <a href="https://www.golightlyplus.com" className={classes.link}>
              &copy; {new Date().getFullYear()} Golightly+
            </a>
          </Typography>
        </Drawer>
        <Toolbar className={classes.menuBarPadding}>
          <IconButton
            className={classes.menuButton}
            color="contrast"
            aria-label="Menu"
            onClick={() => this.toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            Gmail Blocker
          </Typography>
          {this.renderUserLogin()}
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ user }) => {
  return { user };
};

export default connect(mapStateToProps)(withStyles(styles)(Header));
