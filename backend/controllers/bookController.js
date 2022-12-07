const { Book, Author } = require("../models/Book");

const bookController = {
  //ADD A BOOK
  addABook: async (req, res) => {
    try {
      const newBook = new Book(req.body);
      const saveBook = await newBook.save();
      res.status(200).json(saveBook);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //GET ALL BOOK
  getAllBook: async (req, res) => {
    try {
      const allBooks = await Book.find();
      res.status(200).json(allBooks);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //GET A BOOK
  getABook: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      res.status(200).json(book);
    } catch (error) {
      res.status(500).json(err);
    }
  },

  //UPDATE BOOK
  upDateBook: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      await book.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!");
    } catch (error) {
      res.status(500).json(err);
    }
  },

  //DELETE A BOOK
  delBook: async (req, res) => {
    try {
      await Book.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully!");
    } catch (error) {
      res.status(500).json(err);
    }
  },
};

module.exports = bookController;
