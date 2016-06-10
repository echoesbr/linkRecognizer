/*
 * Product model
 */
var Product = require('./model/product');
var q = require('q');

function add(item) {

    var url = require('./url');

    var deferred = q.defer();

    var product = new Product();
    product.id = item.id;
    product.title = item.title;
    product.price = item.price;
    product.link = item.link;
    product.bare_link = url.parse(String(item.link));

    product.save(function (err) {
        if (err)
            deferred.reject(err);

        deferred.resolve(item);

    });
    
    return deferred.promise;
}

function search(string) {

    var product = new Product();
    product.find(
            {$text: {$search: string}},
            {score: {$meta: "textScore"}}
    )
            .sort({score: {$meta: 'textScore'}})
            .exec(function (err, results) {
                if (err)
                    return false;

                console.log(results);
            });
}

// Functions which will be available to external callers
exports.add = add;
exports.search = search;