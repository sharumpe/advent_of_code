#!/usr/bin/env node

var input = require('./day5.json');
var total_nice_strings = 0;

var count_vowels = function(str) {
  return (str.match(/[aeiou]/g)||[]).length;
}
var has_doubles = function(str) {
  for(var i=0;i<str.length;i++) {
    if (str.charAt(i) == str.charAt(i+1)) {
      return true;
    }
  }
  return false;
}
var has_verboten = function(str) {
  if ((str.match(/(ab|cd|pq|xy)/g)||[]).length > 0) {
    return true;
  }
  return false;
}
var is_nice_string = function(str) {
  console.log("Checking out %s", str);

  if (has_verboten(str)) {
    console.log("...has verboten pair(s)");
    return false;
  }

  if (!has_doubles(str)) {
    console.log("...has no double letter pair(s)");
    return false;
  }

  if (count_vowels(str) < 3) {
    console.log("...has < 3 vowels");
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
