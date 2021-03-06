const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: 'username is required.'
    }

});

const User = mongoose.model('User', UserSchema);

module.exports = User;