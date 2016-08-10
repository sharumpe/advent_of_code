#!/usr/bin/env node

var input = require('./day5.json');
var total_nice_strings = 0;

var has_double_pairs = function(str) {
  return (str.match(/([a-z]{2}).*?\1/i)||[]).length;
}

var has_split_repeat = function(str) {
  return (str.match(/([a-z]).\1/i)||[]).length;
}

var is_nice_string = function(str) {
  console.log("Checking out %s", str);

  if (!has_double_pairs(str)) {
    console.log("...has no double pairs");
    return false;
  }

  if (!has_split_repeat(str)) {
    console.log("...has no split repeats");
    return false;
  }

  return true;
}

input.forEach(function(str){
  if (is_nice_string(str)) {
    console.log("%s is nice...", str);
    total_nice_strings++;
  }
})
console.log("Total nice strings: %s", total_nice_strings);
