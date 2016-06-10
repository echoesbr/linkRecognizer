var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema ({
    id : String,
    client_id : String,
    title : String,
    price : String,
    link : String,
    bare_link : String
}, { collection: 'products' });

module.exports = mongoose.model('Product', ProductSchema);