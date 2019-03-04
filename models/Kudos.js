const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var kudosSchema = new Schema({
    sender: String,
    receiver: String,
    body: String
});

const Kudo = mongoose.model('Kudo', kudosSchema);

module.exports = Kudo;