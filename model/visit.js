var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VisitSchema = new Schema ({
    product_id : String,
    link : String,
    score : String,
    date: Date
});

module.exports = mongoose.model('Visit', VisitSchema);