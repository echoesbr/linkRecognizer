/*
 * XML reader module 
 */

// Check if all XML properties are valid
function read(xml) {
    // Import of the async iterator module
    var _ = require('lodash');
    var q = require('q');

    var promises = [];
    var products = xml.store.item;

    /*
     *  Proceeds if the XML contains the following structure:
     *  <STORE>
     *      <ITEM>
     *      ...
     *      </ITEM>
     *  </STORE>
     */

    _.each(products, function (item) {
        // If one of the following properties are not present at the XML, returns FALSE
        if (!item.id || !item.title || !item.price || !item.link)
            return false;

        // Import of the Product module
        var Product = require('./product');
        // Insert of the product into the database
        promises.push(Product.add(item));
    });

    return q.all(promises);
}

// Functions which will be available to external callers
exports.read = read;
