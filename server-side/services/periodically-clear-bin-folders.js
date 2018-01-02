const mongoose = require('mongoose');
const { emptyBin } = require('./google');

module.exports = interval => {
  const User = mongoose.model('users');
  setInterval(async () => {
    console.log(`Clearing Bin folders at ${new Date().toString()}`);
    const users = await User.find({ clearBinFolder: true }).exec();
    for (const user of users) {
      const numMessagesDeleted = await emptyBin(user);
      console.log(
        `Cleared Bin folder for ${user.firstName} ${user.lastName} (${
          user.emailAddress
        }). Number of messages deleted: ${numMessagesDeleted}`
      );
    }
    console.log('...done');
  }, interval);
};
