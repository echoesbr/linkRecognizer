<h2>Link Recognizer</h2>
This is a Node.js Link Recognizer service.
<br />
<br />
To run it, you must have MongoDB installed and use the database "shopback".
<br />
Also there's an initial need to populate the client's collection with their names and get the generated "_id" to put in the example XML's.
<br />
<br />
In order to have faster text search queries, the following command must be executed inside MongoDB:
db.products.createIndex({bare_link: "text"})
<br />
<br />
Run "npm install" at the root folder of the project, to install it's dependencies.
<br />
<br />
Run "node Server.js" to start the API.
<br />
<br />
To simulate the requests, you can use cURL or Postman.
<br />
<br />
Jasmine was used to perform response testing. To run the tests, go to the root folder and run "npm test".