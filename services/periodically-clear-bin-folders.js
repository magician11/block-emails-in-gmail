const mongoose = require('mongoose');
const { emptyBin } = require('./google');

module.exports = interval => {
  try {
    const User = mongoose.model('users');
    setInterval(async () => {
      console.log(`Clearing Trash folders at ${new Date().toString()}`);
      const users = await User.find({ clearBinFolder: true }).exec();
      for (const user of users) {
        await emptyBin(user);
        console.log(
          `Cleared Trash folder for ${user.firstName} ${user.lastName} (${
            user.emailAddress
          }).`
        );
      }
      console.log('...done');
    }, interval);
  } catch (error) {
    console.log('Error emptying bins', error);
  }
};
