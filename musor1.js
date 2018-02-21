
var counter = function(arr){
  return 'There are ' + arr.length + ' elements in array';
};

var adder = function(a, b){
  var res = a + b;
  return 'Sum: ' + res;
};

var pi = 3.14;

//like a object
module.exports = {
  counter: counter, 
  adder: adder,
  pi: pi
};
