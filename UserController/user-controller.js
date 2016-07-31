var User  = require('../database/userdb');
var token = require('rand-token');

exports.index = function (req, res) {
    res.render('index');
};

exports.register = function (req, res) {
    res.render('register');
};

exports.checkRegister = function (req, res) {

};

exports.store = function (req, res) {
    var validateForm = new Promise(function (resolve, reject) {
        if(! req.body.username || ! req.body.password || ! req.body.email || ! req.body.phone){
            reject('Không được bỏ trống');
        }

        if( req.body.password.length < 6){
            reject('Mật khẩu không được ít hơn 6 kí tự');
        }
        resolve();
    });
    validateForm
        .then(function () {
            User.create({
                username    : req.body.username,
                password    : req.body.password,
                name        : req.body.name,
                age         : req.body.age,
                sex         : req.body.sex,
                address     : req.body.address,
                email       : req.body.email,
                phone       : req.body.phone,
                cookie_token: token.generate(16)
            })
                // .then(function () {
                //     res.redirect('/users/login');
                // });
        })
        .then(function () {
            res.redirect('/users/login');
        })
        .catch(function (err) {
             res.render('error', {message:err});
        });

};

exports.login = function (req, res) {
    res.render('login');
};

exports.auth = function (req, res) {
    var findByEmail = function () {
        return User.findOne({email: req.body.email});
    };

    var checkEmail = function (data) {
        if (!data) res.redirect('/users/login');
        return data;
    };

    var findByPassword = function (data) {
        if (data.password == req.body.password) {
            return data;
        }
        return null;
    };

    var checkPassword = function (data) {
        if (!data) res.redirect('/users/login');
        return data;
    };

    var goToListBook = function (data) {
        res.cookie('cookie_login', data.cookie_token);
        res.redirect('/books/list-books');
    };

    var errorPage = function (err) {
        res.render('error', {message: err});
    };

    return findByEmail()
        .then(checkEmail)
        .then(findByPassword)
        .then(checkPassword)
        .then(goToListBook)
        .catch(errorPage);
};
