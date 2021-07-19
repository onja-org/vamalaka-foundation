var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: { type: String, require: true },
  password: { type: String, require: true },
  email: { type: String, require: true },
  role: { type: String, require: true },

  images: { type: [String] },
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

var UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;
