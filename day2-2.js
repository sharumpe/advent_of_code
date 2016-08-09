#!/usr/bin/env node

var input = require('./day2.json');
var int_sort = function(a,b) { return parseInt(a) - parseInt(b); }
var total_ribbon = 0;

input.forEach(function(elem,index,array) {
  var edges = elem.split('x').map(Number).sort(int_sort);
  var item_ribbon = 0;

  // For the bow
  var volume = edges[0]*edges[1]*edges[2];
  item_ribbon += volume;

  // For the shortest ribbon-wrap
  var shortest_circumference = edges[0] * 2 + edges[1] * 2;
  item_ribbon += shortest_circumference;

  console.log("item: %s + %s : %s", volume, shortest_circumference, item_ribbon)
  total_ribbon += item_ribbon;
});

console.log("Total ribbon needed is %s feet.", total_ribbon);
