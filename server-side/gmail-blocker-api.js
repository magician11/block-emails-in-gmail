const express = require('express');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const { initialiseDatabase } = require('./services/mongoose');
const keys = require('./config/keys');

const passport = require('passport');

(async () => {
  const response = await initialiseDatabase();
  console.log(response);

  require('./services/passport');

  const app = express();
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey]
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  require('./routes/index')(app);

  const PORT = process.env.PORT || 8008;
  app.listen(PORT, () => {
    console.log(`Gmail Blocker server started on port ${PORT}`);
  });
})();
