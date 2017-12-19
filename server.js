const express = require('express');
const parser = require('body-parser');
const server = express();

const MongoClient = require('mongodb').MongoClient;

//Not clear what this three lines of code do ->
server.use(parser.json());
server.use(parser.urlencoded({extended: true}));

MongoClient.connect('mongodb://localhost:27017', function(err, client) {
 if(err) {
 console.log(err);
 return;
}

const db = client.db("hammocks");

console.log("connected to database");

server.get('/hammocks', function(req, res) {
 db.collection('hammocks').find().toArray(function(err, result) {
    if(err) {
     console.log(err);
     res.status(500);
     res.send();
     return;
    }

    console.log("Found");
    res.status(201);
    res.json(result);
   });
});

server.post('/hammocks', function(req, res) {
 db.collection('hammocks').insert( req.body, function(err, result) {
   if(err) {
    console.log(err);
    res.status(500); // 500, something went wrong.
    res.send(); // to whoever did the request.
    return;
   }

   console.log("Saved to database");
   res.status(201); // 201, all good.
   res.json(result);
 });
});

server.delete('/hammocks', function(req, res) {
 db.collection('hammocks').remove(function(err, result) {
  if(err) {
   console.log(err);
   res.status(500);
   res.send();
   return;
  }

  console.log("Deleted");
  res.json(result);
 });
});

server.listen(3000, function(){
  console.log("Listening on port 3000");
 });
});
