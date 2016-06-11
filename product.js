/*
 * Product module
 */

// Import of the Product module
var Product = require('./model/product');
// Import of the Product module
var Client = require('./model/client');

// Import of the promise module
var q = require('q');

function add(item, store_id) {
    // Import of the URL module
    var url = require('./url');
    // A promise is created in order to receive the result of the save action
    var deferred = q.defer();

    Client.findById(store_id, function (err, client) {
        if (err)
            deferred.reject(err);

        if (!client)
            deferred.reject(err);

        var product = new Product();
        product.id = item.id;
        product.client_id = client._id;
        product.title = item.title;
        product.price = item.price;
        product.link = item.link;
        product.bare_link = url.parse(String(item.link));

        // Saving the object at the database
        product.save(function (err) {
            if (err)
                deferred.reject(err);

            // If it succeeded the promise will be resolved
            deferred.resolve(item);
        });
    });
    return deferred.promise;

}

function search(string, client_id) {
    // A promise is created in order to receive the result of the save action
    var deferred = q.defer();

    Product.find(
            {$text: {$search: string}},
            {score: {$meta: "textScore"}})
            .where('client_id').equals(client_id)
            .sort({score: {$meta: 'textScore'}})
            .limit(1)
            .exec(function (err, result) {
                if (err)
                    deferred.reject(err);

                // If it succeeded the promise will be resolved
                deferred.resolve(result);
            });

    return deferred.promise;
}

// Functions which will be available to external callers
exports.add = add;
exports.search = search;