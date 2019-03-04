const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/kudosdb");

    db.Kudos.insert({"sender": "Mitch", "receiver": "Joanne", "body": "You're the best!!"});
    db.Kudos.insert({"sender": "Juan", "receiver": "Mitch", "body":"Don't forget those TPS reports."});
    db.Kudos.insert({"sender": "Joanne", "receiver": "Greg", "body": "Those cookies were really good."});
