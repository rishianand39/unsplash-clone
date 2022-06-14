const mongoose = require("mongoose");

const PhotoSchema = new mongoose.Schema(
  {
    img: { type: String, required: true },
    likes: { type: Number, required: true },
    user: { type: String, required: true },
    url: { type: String, required: true },
    downloads: { type: Number, required: true },
    views: { type: String, required: true },
    category: { type: Array, required: true },
    avatar: { type: String,}
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Photo", PhotoSchema);
