/*
 * ShopBack Test
 * Link Recognizer Challenge
 * Bruno Moraes
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
// Accept of XML content type
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
            var check = xml.xmlValidator(req.body);
            
            // If everything looks good
            if (check) {
                res.status(200).send({success: 'XML file read successfully!'});
            } else {
                res.status(500).send({error: 'XML file read failed. Check if all fields are filled.'});
            }
        })
        .get(function (req, res) {
            client.find(function (err, data) {
                if (err)
                    res.send(err);

                res.json(data);
            })
        });

app.use('/', router);

// Sets the APP to listen to the defined port above
app.listen(port);
console.log('Node Server UP! ' + port);