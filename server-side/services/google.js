const axios = require('axios');
const querystring = require('querystring');
const keys = require('../config/keys');

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
    console.log(err);
  }
};

/*
For the user passed in, get an accessToken from the refreshToken.

Then get all messages from the trash. Then turn that list into a list of ids only.
See https://developers.google.com/gmail/api/v1/reference/users/messages/batchDelete?authuser=1

Then do a POST request with those ids to clear out the trash.
*/

const emptyTrash = async user => {
  try {
    console.log('Getting messages from trash...');
    const accessToken = await getAccessToken(user.refreshToken);

    const emailList = await axios(
      `https://www.googleapis.com/gmail/v1/users/${user.googleId}/messages?access_token=${accessToken}&q=is%3Atrash`
    );

    const messagesToBeDeleted = emailList.data.messages.map(email => email.id);

    await axios.post(
      `https://www.googleapis.com/gmail/v1/users/${user.googleId}/messages/batchDelete?access_token=${accessToken}`,
      {
        ids: messagesToBeDeleted
      }
    );

    console.log('Trash emptied.');
  } catch (err) {
    console.log(err.response.data.error);
  }
};

const getProfile = async user => {
  try {
    const accessToken = await getAccessToken(user.refreshToken);

    const response = await axios(
      `https://www.googleapis.com/plus/v1/people/${user.googleId}?access_token=${accessToken}`
    );

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  emptyTrash,
  getProfile
};
