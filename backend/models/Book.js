const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: [String],
    required: true,
  },
  genres: {
    type: [String],
    required: true,
  },
  image: {
    type: [String],
  },
  publishDate: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: [String],
  },
});

let Book = mongoose.model("Book", bookSchema);

module.exports = { Book };
