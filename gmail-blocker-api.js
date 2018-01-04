const express = require('express');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const { initialiseDatabase } = require('./services/mongoose');
const periodicallyClearBinFolders = require('./services/periodically-clear-bin-folders');
const keys = require('./config/keys');

const passport = require('passport');

(async () => {
  const response = await initialiseDatabase();
  console.log(response);

  // start periodically clearing Bin folders
  console.log('Started process to clear Bin folders...');
  periodicallyClearBinFolders(3.6e6);

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

  // handling routes for the front end
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    const path = require('path');

    // catch all
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

  const PORT = process.env.PORT || 8008;
  app.listen(PORT, () => {
    console.log(`Gmail Blocker server started on port ${PORT}`);
  });
})();
