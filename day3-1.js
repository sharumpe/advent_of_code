#!/usr/bin/env node

var input            = require('./day3.json');
var x                = 0;
var y                = 0;
var houses           = {};
var total_deliveries = 0;

// Mark the house as delivered-to.
// Also track total deliveries, while we're at it.
var deliverToHouse = function(x,y) {
  var addr = x + ',' + y;
  if (!houses[addr]) {
    houses[addr] = 0;
  }
  houses[addr]++;
  total_deliveries++;
}

// Mark the start location
deliverToHouse(x,y);

var chars = input.directions.split('');
chars.forEach(function(dir){
  switch(dir) {
    case '>': x++; break;
    case '<': x--; break;
    case 'v': y++; break;
    case '^': y--; break;
  }
  deliverToHouse(x,y)
})

console.log("Santa delivered to %s houses!", Object.keys(houses).length);
