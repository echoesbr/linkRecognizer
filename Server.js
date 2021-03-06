/*
 * @author Bruno Moraes
 * 
 */

// Import of the necessary modules
// Express framework responsible for the HTTP methods 
var express = require('express');
var xmlparser = require('express-xml-bodyparser');
var app = express();
// Middleware used in the requests
var bodyParser = require('body-parser');
var router = express.Router();

// Sets the service port to the environment variable or to 8081
var port = process.env.PORT || 8081;

// Set the url encode to extended
app.use(bodyParser.urlencoded({extended: true}));
// The parser set to json format
app.use(bodyParser.json());
// Accept XML content type
app.use(xmlparser());

// API routes
router.get('/', function (req, res) {
    res.json({message: 'This is the ShopBack Link Recognizer API!'});
});

// Endpoint that receives the store products XML
router.route('/xml/receive')
        .post(function (req, res) {
            // Import of the module that validates the XML
            var xml = require('./xml');
            if (!req.body)
                res.status(400).send({error: 'Payload not recognized'});

            xml.read(req.body).then(function () {
                res.status(200).send({success: 'XML file read successfully!'});
            }).catch(function (err) {
                res.status(500).send(err);
            });
        });

// Endpoint that receives the URL back from the Javascript
router.route('/url/receive')
        .post(function (req, res) {
            // Get the URL that it's sent from the POST request
            var url = req.body.url;
            var client_id = req.body.id;

            if (!url || !client_id)
                res.status(400).send({error: 'Payload not recognized'});

            // Import of the module URL
            var urlModule = require('./url');

            urlModule.search(url, client_id).then(function (result) {
                var Visit = require('./visit');

                // Adition of the visited product into the database
                Visit.add(result[0][0], url).then(function () {
                    res.status(200).send({success: 'URL processed successfully!'});
                }).catch(function (err) {
                    res.status(500).send(err);
                });
            }).catch(function (err) {
                res.status(500).send(err);
            });

        });


app.use('/', router);

// Starts the database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/linkDb');

// Sets the APP to listen to the defined port
app.listen(port);
console.log('Node Server UP! ' + port);