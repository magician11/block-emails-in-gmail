const express = require('express');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');
const passport = require('passport');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);

require('./models/User');
require('./services/passport');

const app = express();

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
