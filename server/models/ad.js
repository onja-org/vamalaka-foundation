const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdSchema = new Schema({
  body: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "category",
  },
  comments: [
    {
      body: { type: String },
      username: { type: String },
      createdAt: { type: String },
    },
  ],
  likes: [
    {
      username: { type: String },
      createdAt: { type: String },
    },
  ],
});

const AdModel = mongoose.model("ad", AdSchema);
module.exports = AdModel;
