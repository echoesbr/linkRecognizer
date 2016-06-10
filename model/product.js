var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema ({
    id : String,
    title : String,
    price : String,
    link : String,
    bare_link : String
});

var VisitSchema = new Schema ({
    product_id : String,
    date : Date
});

module.exports = mongoose.model('Product', ProductSchema);
module.exports = mongoose.model('Visit', VisitSchema);