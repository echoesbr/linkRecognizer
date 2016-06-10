/*
 * URL utilities module
 */

function parse(url) {
    // This function only allows strings
    if(typeof(url) != "string")
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

function search(str) {
    var string = parse(str);
    
    var q = require('q');
    var promises = [];
    
    // Import of the Product module
    var Product = require('./product');
    // Search for product into the database
    promises.push(Product.search(string));
    
    return q.all(promises);
}

// Functions which will be available to external callers
exports.parse = parse;
exports.search = search;