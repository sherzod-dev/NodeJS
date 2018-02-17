
var express = require("express");
var app = express();

app.get("/", function(req, res){
  console.log("Someone made a request to /home");
  res.send("Hi there!");
});

app.get("/bye", function(req, res){
  console.log("Someone made a request to /bye");
  res.send("<b>Bye</b> bye!");
});

app.get("/dog", function(req, res){
  console.log("Someone made a request to /dog");
  res.setHeader('Content-type', 'text/plain');
  res.send("<b>M</b>eow!");
});


app.listen(3000, '0.0.0.0', function(){
  console.log("server has started!!!");
});
