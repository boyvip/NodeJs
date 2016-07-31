var mongoose   = require('mongoose');
var userSchema = new mongoose.Schema({
    username    : {type: String, required: true},
    password    : {type: String, required: true},
    name        : {type: String, required: true},
    age         : {type: Number, required: true},
    sex         : {type: Number, required: true},
    address     : {type: String, required: true},
    email       : {type: String, required: true},
    phone       : {type: Number, required: true},
    cookie_token: {type: String, required: true}
});

var User = mongoose.model('User', userSchema);

module.exports = User;
