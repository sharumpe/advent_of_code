#!/usr/bin/env node

var input = require('./day2.json');
var int_sort = function(a,b) { return parseInt(a) - parseInt(b); }
var total_area = 0;

input.forEach(function(elem,index,array) {
  var edges = elem.split('x').map(Number).sort(int_sort);
  var item_area = 0;
  var sides = [
    edges[0] * edges[1],
    edges[0] * edges[2],
    edges[1] * edges[2]
  ].sort(int_sort);
  item_area += sides[0];
  sides.map(function(elem){
    item_area += elem * 2;
  });
  console.log("item: %s x %s x %s : %s", sides[0],sides[1],sides[2],item_area);
  total_area += item_area;
});

console.log("Total area: %s", total_area);
