const axios = require('axios');
const querystring = require('querystring');
const keys = require('../config/keys');

/*
 Tt looks like access_tokens expire every hour or so
 -- https://stackoverflow.com/a/26049400/2813041
 */
const getAccessToken = async refreshToken => {
  try {
    const accessTokenObj = await axios.post(
      'https://www.googleapis.com/oauth2/v4/token',
      querystring.stringify({
        refresh_token: refreshToken,
        client_id: keys.googleClientID,
        client_secret: keys.googleClientSecret,
        grant_type: 'refresh_token'
      })
    );
    return accessTokenObj.data.access_token;
  } catch (err) {
    throw err;
  }
};

/*
To empty the Trash folders of a Gmail account...

For the user passed in, first get an accessToken from the refreshToken.

Then get all messages from the Trash folder. Then turn that list into a list of ids only.
See https://developers.google.com/gmail/api/v1/reference/users/messages/batchDelete?authuser=1

Then do a POST request with those ids to clear out the Trash folders.
*/

const emptyBin = async user => {
  try {
    const accessToken = await getAccessToken(user.refreshToken);

    const emailList = await axios(
      `https://www.googleapis.com/gmail/v1/users/${
        user.googleId
      }/messages?access_token=${accessToken}&q=is%3Atrash`
    );

    const messageCount = emailList.data.resultSizeEstimate;

    if (messageCount > 0) {
      const messagesToBeDeleted = emailList.data.messages.map(
        email => email.id
      );

      await axios.post(
        `https://www.googleapis.com/gmail/v1/users/${
          user.googleId
        }/messages/batchDelete?access_token=${accessToken}`,
        {
          ids: messagesToBeDeleted
        }
      );
    }

    return messageCount;
  } catch (err) {
    throw err;
  }
};

const getFilters = async user => {
  try {
    const accessToken = await getAccessToken(user.refreshToken);

    const response = await axios(
      `https://www.googleapis.com/gmail/v1/users/${
        user.googleId
      }/settings/filters?access_token=${accessToken}`
    );

    return response.data.filter;
  } catch (err) {
    throw err;
  }
};

const getProfile = async user => {
  try {
    const accessToken = await getAccessToken(user.refreshToken);

    const response = await axios(
      `https://www.googleapis.com/plus/v1/people/${
        user.googleId
      }?access_token=${accessToken}`
    );

    return response.data;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  emptyBin,
  getProfile,
  getFilters
};
