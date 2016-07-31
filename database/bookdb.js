var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
    bookName: {type: String, require: true},
    author  : {type: String, require: true},
    category: {type: String, require: true}
});

var Book = mongoose.model('Book', bookSchema);

module.exports = Book;

