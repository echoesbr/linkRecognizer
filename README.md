<h2>Link Recognizer</h2>
This is a Node.js Link Recognizer service.
<br />
To run it, you must have MongoDB installed and use the database "shopback".
Also there's a initial need to populate the client's collection with their names and get the generated "_id" to put in the example XML's.
<br />
In order to have faster text search queries, the following command must be executed inside the MongoDB:
db.products.createIndex({bare_link: "text"})
<br />
Run "npm install" at the root folder of the project, to install it's dependencies.
<br />
Run "node Server.js" to start the API.
<br />
To simulate the requests, you can use CURL or Postman.
