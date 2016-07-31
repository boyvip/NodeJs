var User       = require('./../database/userdb');
exports.checkLogin = function (req, res, next) {
    User.findOne({cookie_token: req.cookies.cookie_login})
        .then(function (user) {
            if (! user) res.redirect('/users/login');
            next();
        })
    ;
};