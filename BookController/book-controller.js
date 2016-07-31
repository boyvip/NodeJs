var Books           = require('./../database/bookdb');
var SearchCondition = require('./../BookSearch/book-search-condition');

exports.listBooks = function (req, res) {
    Books.find().exec()
        .then(function (books) {
            res.render('listbook', {books: books});
        });
};

exports.addBook = function (req, res) {
    res.render('add-book');
};

exports.store    = function (req, res) {
    Books.create({
        bookName: req.body.bookName,
        author  : req.body.author,
        category: req.body.category
    })
        .then(function (data) {
            res.redirect('/books/list-books');
        });
};
exports.editBook = function (req, res) {
    Books.findById(req.params.id)
        .then(function (book) {
            res.render('edit-book', {book: book});
        });
};

exports.updateBook = function (req, res) {
    Books.findById(req.params.id)
        .then(function (book) {
            book.update({
                bookName: req.body.bookName,
                author  : req.body.author,
                category: req.body.category
            }).then(function () {
                res.redirect('/books/list-books');
            });
        });
};

exports.deleteBook = function (req, res) {
    Books.findById(req.params.id)
        .then(function (book) {
            book.remove();
        })
        .then(function () {
            res.redirect('/books/list-books');
        })
};

exports.search = function (req, res, next) {
    var conditionSearch = new SearchCondition()
            .bookName(req.query['nameSearch'])
            .author(req.query['authorSearch'])
            .category(req.query['cateSearch'])
        ;

    conditionSearch.getQuery()
        .then(function (books) {
            res.render('listbook', {books: books});
        })
        .catch(function (error) {
            next(error);
        })
    ;
};