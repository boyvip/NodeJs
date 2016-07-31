var express    = require('express');
var router     = express.Router();
var Books      = require('./../BookController/book-controller');
var Middleware = require('./../middleware/check-login');
router.get('/list-books', Middleware.checkLogin, Books.listBooks);
router.get('/add-book', Middleware.checkLogin, Books.addBook);
router.post('/store', Middleware.checkLogin,Books.store);
router.get('/edit/:id', Middleware.checkLogin, Books.editBook);
router.post('/update/:id', Middleware.checkLogin, Books.updateBook);
router.get('/delete/:id', Middleware.checkLogin, Books.deleteBook);
router.get('/search', Middleware.checkLogin, Books.search);
module.exports = router;

