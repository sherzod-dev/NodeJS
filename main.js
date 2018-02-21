var express = require("express");
var app = express();
console.log("Server has started");

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
});
//comment
app.get("/karaoke/beliver", function(req, res){
  res.sendFile(path.join(__dirname + '/Karaoke/KARAOKE.html'));
});
//comment
app.get("/dog", function(req, res){
  console.log("Someone made a request to /dog");
  res.send("<b>M</b>eow!");
});
 

app.listen(80);

/*, '0.0.0.0', function(){
  console.log("server has started!!!");
});*/
 