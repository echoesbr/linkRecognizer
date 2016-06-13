/*
 * URL utilities module
 */

function parse(url) {
    // This function only allows strings
    if (typeof (url) != "string")
        return false;

    // Setting it to lowercase
    url.toLowerCase();

    // Removing the unwanted protocols
    var str = url.replace("http://", "");
    var str = str.replace("https://", "");

    // Spliting the URL, so the host can be ignored
    var array = str.split("/");
    array.splice(0, 1);
    // Transforming the array into string, so the search data type if fulfilled
    var string = array.toString();
    // Removing everything but words
    var string = string.replace(/\W/g, " ");

    return string;
}

function search(url, client_id) {
    var string = parse(url);

    var q = require('q');
    var promises = [];

    // Import of the Product module
    var Product = require('./product');

    // Search for product into the database
    var productPromise = Product.search(string, client_id);
    promises.push(productPromise);
    
    return q.all(promises);
}

// Functions which will be available to external callers
exports.search = search;
exports.parse = parse;