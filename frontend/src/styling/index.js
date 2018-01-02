import 'normalize.css';

const magicNumber = 11;

export default {
  // general padding for containers
  containerSpacing: {
    paddingTop: magicNumber * 2,
    paddingBottom: magicNumber * 2,
    marginTop: magicNumber,
    paddingLeft: magicNumber * 3,
    paddingRight: magicNumber * 3
  },
  fullHeight: {
    height: '100vh'
  },
  // typography
  topTitleMargin: {
    marginTop: magicNumber * 3
  },
  link: {
    textDecoration: 'none'
  },
  flex: {
    flex: 1
  },
  // menus
  menuButton: {
    marginLeft: -magicNumber,
    marginRight: magicNumber * 2
  },
  drawer: {
    width: magicNumber * magicNumber * 3
  },
  drawerPadding: {
    padding: magicNumber * 2
  }
};
