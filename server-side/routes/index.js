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

  app.get('/api/fetch-user', (req, res) => {
    res.send(req.user);
  });

  app.get('/api/fetch-user-profile', async (req, res) => {
    const profile = await getProfile(req.user);
    res.send(profile);
  });
};
