const express = require('express');
const https = require('https');
const fs = require('fs');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const { initialiseDatabase } = require('./services/mongoose');
const periodicallyClearBinFolders = require('./services/periodically-clear-bin-folders');
const keys = require('./config/keys');

const passport = require('passport');

(async () => {
  const response = await initialiseDatabase();
  console.log(response);

  // start periodically clearing Trash
  console.log('Started process to clear Trash folders...');
  periodicallyClearBinFolders(3600000);

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
  const serverStartMessage = `Love Yourself server started on port ${PORT} at ${new Date().toString()}`;

  let sslOptions;
  if (process.env.NODE_ENV === 'production') {
    const sslBase = '/etc/letsencrypt/live/loveyourself.io';
    sslOptions = {
      key: fs.readFileSync(`${sslBase}/privkey.pem`),
      cert: fs.readFileSync(`${sslBase}/fullchain.pem`),
      ca: fs.readFileSync(`${sslBase}/chain.pem`)
    };

    app.use(express.static('client/build'));
    const path = require('path');

    // catch all
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  } else {
    sslOptions = {
      key: fs.readFileSync('./config/localhost.key'),
      cert: fs.readFileSync('./config/localhost.cert'),
      requestCert: false,
      rejectUnauthorized: false
    };
  }

  // startup the https server
  https.createServer(sslOptions, app).listen(PORT, () => {
    console.log(serverStartMessage);
  });
})();
