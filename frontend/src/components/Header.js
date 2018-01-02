import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import MenuIcon from 'material-ui-icons/Menu';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
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

  handleRequestMenuClose = () => {
    this.setState({ menuOpen: false });
  };

  renderUserLogin = () => {
    const { user } = this.props;
    const { anchorEl, menuOpen } = this.state;
    return (
      <div>
        <Avatar
          alt={`${user.firstName} ${user.lastName}`}
          src={user.imageUrl}
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
          onRequestClose={this.handleRequestMenuClose}
        >
          <MenuItem onClick={() => (window.location = '/api/logout')}>
            Logout
          </MenuItem>
        </Menu>
      </div>
    );
  };

  toggleDrawer = openState => {
    this.setState({ drawerOpen: openState });
  };

  render() {
    const { classes } = this.props;

    return (
      <AppBar position="static">
        <Drawer
          open={this.state.drawerOpen}
          onRequestClose={() => this.toggleDrawer(false)}
          classes={{ paper: classes.drawer }}
        >
          <Typography
            type="display1"
            color="inherit"
            className={classes.drawerPadding}
          >
            Gmail Blocker
          </Typography>
          <Divider />
          <List>
            <ListItem
              button
              component="a"
              href="https://golightlyplus.com/contact/"
            >
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
