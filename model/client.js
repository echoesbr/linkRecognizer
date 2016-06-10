var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClientSchema = new Schema ({
    id : String,
    name : String
});

module.exports = mongoose.model('Client', ClientSchema);