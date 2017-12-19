const server = require('express');
const parser = require('body-parser');
const app = server();

const MongoClient = require('mongodb').MongoClient;

//Not clear what this three lines of code do ->
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

MongoClient.connect('mongodb://localhost:27017', function(err, client) {
 if(err) {
 console.log(err);
 return;
}

const db = client.db("hammocks");

console.log("connected to database");

app.listen(3000, function(){9
  console.log("Listening on port 3000");
 });
});
