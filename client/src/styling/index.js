import landingPageBgImage from '../images/water.jpg';

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
  menuBarPadding: {
    paddingTop: magicNumber
  },
  menuButton: {
    marginLeft: -magicNumber,
    marginRight: magicNumber * 2
  },
  drawer: {
    width: magicNumber * magicNumber * 2
  },
  drawerPadding: {
    padding: magicNumber * 2
  },
  // landing page
  mediaImage: {
    height: 380
  },
  landingPage: {
    backgroundImage: `url(${landingPageBgImage})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
  },
  landingPageContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: magicNumber * 3
  },
  landingPagePaper: {
    width: '560px',
    paddingTop: magicNumber * 2,
    paddingBottom: magicNumber * 2,
    paddingLeft: magicNumber * 3,
    paddingRight: magicNumber * 3
  }
};
