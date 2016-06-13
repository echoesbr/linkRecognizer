/*
 * XML reader module 
 */

// Check if all XML properties are valid
function read(xml) {
    // Import of the async iterator module
    var _ = require('lodash');
    // Import of the q library, responsible for the promises
    var q = require('q');
    // Array of promises
    var promises = [];
    // Variables set from the XML
    var products = xml.store.item;
    var store_id = xml.store.$.id;

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
        promises.push(Product.add(item, store_id));
    });

    return q.all(promises);
}

// Functions which will be available to external callers
exports.read = read;
