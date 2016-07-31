var Books = require('./../database/bookdb');

var BookSearchCondition = function () {
    this.dataSearch = {};
};

BookSearchCondition.prototype.bookName = function (bookName) {
    this.dataSearch.bookName = bookName;
    return this;
};

BookSearchCondition.prototype.author = function (author) {
    this.dataSearch.author = author;
    return this;
};

BookSearchCondition.prototype.category = function (category) {
    this.dataSearch.category = category;
    return this;
};

BookSearchCondition.prototype.getQuery = function () {
    var conditions = {};
    if (this.dataSearch.bookName) {
        conditions.bookName = new RegExp(this.dataSearch.bookName, 'i');
    }
    if (this.dataSearch.author) {
        conditions.author = new RegExp(this.dataSearch.author, 'i');
    }
    if (this.dataSearch.category) {
        conditions.category = new RegExp(this.dataSearch.category, 'i');
    }

    return Books.find(conditions);
};

module.exports = BookSearchCondition;

