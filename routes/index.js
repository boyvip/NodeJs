var express = require('express');
var router = express.Router();
// var userController = require('../UserController');

/* GET home page. */
router.get('/user', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/', userController.index);
// router.get('/users/register', userController.register);
// router.post('/users/store', userController.store);
// router.get('/users/login', userController.login);


module.exports = router;
