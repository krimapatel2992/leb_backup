

const mongoose = require('mongoose');
const db = require('../config/db.config');

const BookSchema = mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number
});
const Book = mongoose.model('Book', BookSchema, "books"); //MODEL

module.exports=Book;