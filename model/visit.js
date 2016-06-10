var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VisitSchema = new Schema ({
    id : String
});

module.exports = mongoose.model('Visit', VisitSchema);