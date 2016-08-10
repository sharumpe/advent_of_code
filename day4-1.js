#!/usr/bin/env node

var MD5 = require('md5.js');

// var key = 'yzbqklnj';
// var number = 0;

var winner = '00000';
var key = 'yzbqklnj';
var number = 0;
var hashed_string = new MD5().update(key + number.toString()).digest('hex');
// console.log("Tried %s :: %s",number,hashed_string);

while (!hashed_string.startsWith(winner)) {
  hashed_string = new MD5().update(key + number.toString()).digest('hex');
  // console.log("Tried %s :: %s",number,hashed_string);
  number++;
}

console.log("Hashed %s to %s", number-1, hashed_string);
