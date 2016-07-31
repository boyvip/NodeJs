var express = require('express');
var router = express.Router();
var userController = require('./../UserController/user-controller');

router.get('/', userController.index);
router.get('/register', userController.register);
router.post('/store', userController.store);
router.get('/login', userController.login);
router.post('/login', userController.auth);
// router.get('/list-book')

module.exports = router;