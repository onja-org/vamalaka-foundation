const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PhotoSchema = new Schema({
  url: { type: String, require: true },
  info: { type: String },
  isPrimary: { type: Boolean },
});

const PhotoModel = mongoose.model("photo", PhotoSchema);
module.exports = PhotoModel;
