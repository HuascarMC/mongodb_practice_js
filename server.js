const server = require('express');
const parser = require('body-parser');
const app = server();

//Not clear what this three lines of code do ->
app.use(parser.json());
app.use(server.static('client/build'));
app.use(parser.urlencoded({extended: true}));

app.listen(3000, function(){
  console.log("Listening on port 3000");
});
