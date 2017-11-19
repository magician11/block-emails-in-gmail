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

const styles = theme => ({
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  drawer: {
    width: 240
  }
});

class Header extends Component {
  state = {
    drawerOpen: false
  };

  renderUserLogin = () => {
    const { user } = this.props;
    if (this.props.user) {
      return (
        <Avatar
          alt={`${user.firstName} ${user.lastName}`}
          src={user.imageUrl}
        />
      );
    } else {
      return (
        <Button color="contrast" href="/auth/google">
          Login
        </Button>
      );
    }
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
          <Typography type="title" color="inherit">
            Gmail Blocker
          </Typography>
          <List>
            <ListItem button>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem
              button
              component="a"
              href="https://golightlyplus.com/contact/"
            >
              <ListItemText primary="Contact" />
            </ListItem>
            <Divider />
          </List>

          <Typography type="body1" color="inherit">
            &copy; {new Date().getFullYear()} Golightly+
          </Typography>
        </Drawer>
        <Toolbar>
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
