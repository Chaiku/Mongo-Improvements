const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/usersdb");

    db.Users.insert({"username": "Mitch", "password":"meowmeow" });
    db.Users.insert({"username": "Juan", "password": "12345"});
    db.Users.insert({"username": "Joanne","password": "abcde"});
    db.Users.insert({"username": "Greg", "password": "imrlycool"});
    db.Users.insert({"username": "Juan", "password": "nournot"});