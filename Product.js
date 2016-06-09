// Import of the Product model
var productModel = require('./model/product');

function add(item) {

    var product = new Product();
    product.id = item.id;
    product.title = item.title;
    product.price = item.price;
    product.link = item.link;

    productModel.save(function (err) {
        if (err)
            return false;

        return true;
    });
}

// Functions which will be available to external callers
exports.product = {
    "add" : add
};
