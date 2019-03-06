const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var kudosSchema = new Schema({
    body: String,
    to: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    from: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

const Kudo = mongoose.model('Kudo', kudosSchema);

module.exports = Kudo;