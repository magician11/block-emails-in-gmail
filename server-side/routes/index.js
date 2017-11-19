const passport = require('passport');
const { emptyTrash, getProfile } = require('../services/google');

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
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current-user', async (req, res) => {
    if (req.user) {
      const { firstName, lastName, imageUrl } = req.user;
      res.send({ firstName, lastName, imageUrl });
    } else {
      res.send(req.user);
    }
  });
};
