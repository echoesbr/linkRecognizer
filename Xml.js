/*
 * XML reader module 
 */

// Import of the async iterator module 
var _ = require('lodash');
// Import of the Product model
var Product = require('./product');

// Check if all XML properties are valid
function xmlValidator(xml) {

    var products = xml.store.item;

    if (products) {
        _.each(products, function (item) {
            if (!item.id || !item.title || !item.price || !item.link)
                return false;

            return(insertData(item));
        });
    } else {
        return false;
    }
}

// Functions which will be available to external callers
exports.xmlValidator = xmlValidator;
