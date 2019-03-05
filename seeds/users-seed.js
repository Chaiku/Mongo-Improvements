const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/usersdb");



    db.User.collection.insertMany([
        {"username": "Mitch", "password":"meowmeow" },
        {"username": "Juan", "password": "12345"},
        {"username": "Joanne","password": "abcde"},
        {"username": "Greg", "password": "imrlycool"}]
    )

