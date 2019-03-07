const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var kudosSchema = new Schema({
    body: String,
    to: String,
    from: String
});

const Kudo = mongoose.model('Kudo', kudosSchema);

module.exports = Kudo;


// to: [{ type: Schema.Types.ObjectId, ref: 'User' }],
// from: [{ type: Schema.Types.ObjectId, ref: 'User' }]