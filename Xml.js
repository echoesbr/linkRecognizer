/*
 * XML reader module 
 */

// Check if all XML properties are valid
function xmlValidator(xml) {

    var products = xml.store.item;
    /*
     *  Proceeds if the XML contains the following structure:
     *  <STORE>
     *      <ITEM>
     *      ...
     *      </ITEM>
     *  </STORE>
     */
    if (products) {
        // Import of the async iterator module 
        var _ = require('lodash');

        _.each(products, function (item) {
            // If one of the following properties are not present at the XML, returns FALSE
            if (!item.id || !item.title || !item.price || !item.link)
                return false;

            // Import of the Product module
            var Product = require('./product');

            return(Product.add(item));
        });
    } else {
        return false;
    }
}

// Functions which will be available to external callers
exports.xmlValidator = xmlValidator;
