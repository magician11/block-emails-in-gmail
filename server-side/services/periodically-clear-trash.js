const mongoose = require('mongoose');
const { emptyTrash } = require('./google');

const periodicallyClearTrash = interval => {
  const User = mongoose.model('users');
  setInterval(async () => {
    const users = await User.find({ clearTrash: true }).exec();
    console.log(users);
  }, interval);
};

module.exports = {
  periodicallyClearTrash
};
