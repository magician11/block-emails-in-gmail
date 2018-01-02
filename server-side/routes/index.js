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
      res.redirect('/dashboard');
    }
  );

  app.get('/api/logout', (req, res) => {
    console.log('logging out...');
    req.logout();
    res.redirect('/');
  });

  // update whether the trash gets cleared or not for a particular user
  app.post('/api/clear-trash-status', async (req, res) => {
    const user = await User.findOneAndUpdate(
      { googleId: req.user.googleId },
      { clearTrash: req.body.clearTrash },
      { new: true }
    );
    console.log('response from clear trash status api call');
    console.log(user);
    res.send(user);
  });

  app.get('/api/current-user', async (req, res) => {
    console.log('api current-user');
    console.log(req);
    if (req.user) {
      const {
        firstName,
        lastName,
        imageUrl,
        emailAddress,
        clearTrash
      } = req.user;
      res.send({ firstName, lastName, imageUrl, emailAddress, clearTrash });
    } else {
      res.send(req.user);
    }
  });
};
