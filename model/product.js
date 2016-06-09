var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopback');

var Schema = mongoose.Schema;

var ProductSchema = new Schema ({
    id : String,
    title : String,
    price : Double,
    link : String
});

module.exports = mongoose.model('Product', ProductSchema);