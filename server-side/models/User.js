const mongoose = require('mongoose');

const { Schema } = mongoose;

/*
We only need to store the googleId and refreshToken to be able to get
- the profile of this person later
- access to their emails (from scope declaration)
*/

const userSchema = new Schema({
  googleId: String,
  refreshToken: String,
  firstName: String,
  lastName: String,
  emailAddress: String,
  imageUrl: String,
  clearTrash: { type: Boolean, default: false }
});

mongoose.model('users', userSchema);
