const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
  Title: { type: String, required: true },
  Author: { type: String, required: true },
  Genre: { type: String, required: true },
  Stock: { type: Number, required: true },
});

 const booksdb = new mongoose.model('mess', MenuSchema);
 module.exports = booksdb;