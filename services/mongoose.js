const mongoose = require('mongoose');
const keys = require('../config/keys');

const initialiseDatabase = () => {
  return new Promise(async (resolve, reject) => {
    const response = await mongoose.connect(keys.mongoURI);
    console.log('Connection established to mLab!');
    require('../models/User');
    resolve('Initialisation for database complete.');
  });
};

module.exports = {
  initialiseDatabase
};
