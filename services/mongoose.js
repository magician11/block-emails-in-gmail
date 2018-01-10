const mongoose = require('mongoose');
const keys = require('../config/keys');

const initialiseDatabase = async () => {
  try {
    const response = await mongoose.connect(keys.mongoURI);
    require('../models/User');
    return 'Connection to database established and models initialised.';
  } catch (error) {
    throw error;
  }
};

module.exports = {
  initialiseDatabase
};
