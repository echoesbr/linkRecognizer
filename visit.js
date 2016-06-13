/*
 * Product module
 */

// Import of the Visit module
var Visit = require('./model/visit');
// Import of the promise module
var q = require('q');

function add(item, link) {
    // A promise is created in order to receive the result of the save action
    var deferred = q.defer();
    
    var visit = new Visit();
    visit.product_id = item.id;
    visit.client_id = item.client_id;
    visit.link = link;
    visit.date = Date();
    
    // Saving the object at the database
    visit.save(function (err) {
        if (err)
            deferred.reject(err);
        
        // If it succeeded the promise will be resolved
        deferred.resolve(item);
    });

    return deferred.promise;
}

// Functions which will be available to external callers
exports.add = add;