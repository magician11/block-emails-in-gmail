const passport = require('passport');
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email', 'https://mail.google.com/'],
      accessType: 'offline', // we want the refreshToken returned
      prompt: 'consent'
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/error' }),
    (req, res) => {
      res.redirect('/');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  // update whether the Bin folders gets cleared or not for a particular user
  app.post('/api/clear-bin-status', async (req, res) => {
    const user = await User.findOneAndUpdate(
      { googleId: req.user.googleId },
      { clearBinFolder: req.body.clearBinFolder },
      { new: true }
    );
    res.send(user);
  });

  app.get('/api/current-user', async (req, res) => {
    if (req.user) {
      const {
        firstName,
        lastName,
        imageUrl,
        emailAddress,
        clearBinFolder
      } = req.user;
      res.send({ firstName, lastName, imageUrl, emailAddress, clearBinFolder });
    } else {
      res.send(req.user);
    }
  });
};