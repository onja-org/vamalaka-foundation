const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: { type: String, require: true },
  password: { type: String, require: true },
  email: { type: String, require: true },
  role: { type: String, require: true },
  photos: [
    {
      url: { type: String, require: true },
      info: { type: String },
      isPrimary: { type: Boolean },
    },
  ],
  firstName: { type: String },
  lastName: { type: String },
  address: { type: String },
  city: { type: String },
  state: { type: String },
  country: { type: String },
  phone: { type: String },
  bio: { type: String },

  createdAt: { type: String },
});

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;
