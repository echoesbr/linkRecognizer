var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopback');

var Schema = mongoose.Schema;

var ProductSchema = new Schema ({
    id : String,
    title : String,
    price : Number,
    link : String
});

var VisitSchema = new Schema ({
    product_id : String
});

module.exports = mongoose.model('Product', ProductSchema);
module.exports = mongoose.model('Visit', VisitSchema);