/*var express = require("express");
var app = express();
console.log("Server has started");
app.get("/", function(req, res){
  console.log("Someone made a request to /home");
  res.send("Hi there!");
});
//comment
app.get("/bye", function(req, res){
  console.log("Someone made a request to /bye");
  res.send("<b>Bye</b> bye!");
});
//comment
app.get("/dog", function(req, res){
  console.log("Someone made a request to /dog");
  res.send("<b>M</b>eow!");
});
 

app.listen(80);
*/
/*, '0.0.0.0', function(){
  console.log("server has started!!!");
});*/

var stuff = require('./musor1');

console.log(stuff.counter(['hello', 'hi', 'hey']));
console.log(stuff.adder(stuff.pi, 5));
console.log(stuff.adder(5,4)); 


<h1>
  Sherzodbek
</h1>