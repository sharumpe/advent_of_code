#!/usr/bin/env node

var input            = require('./day3.json');
var x                = 0;
var y                = 0;
var rx               = 0;
var ry               = 0;
var houses           = {};

// Mark the house as delivered-to.
var deliverToHouse = function(houses,x,y) {
  var addr = x + ',' + y;
  if (!houses[addr]) {
    houses[addr] = 0;
  }
  houses[addr]++;
}

// Mark the start location
deliverToHouse(houses,x,y);

var chars = input.directions.split('');
chars.forEach(function(dir,index){
  if (index%2 == 0) {
    // Meat Santa
    switch(dir) {
      case '>': x++; break;
      case '<': x--; break;
      case 'v': y++; break;
      case '^': y--; break;
    }
    deliverToHouse(houses,x,y)
  }
  else {
    // RoboSanta
    switch(dir) {
      case '>': rx++; break;
      case '<': rx--; break;
      case 'v': ry++; break;
      case '^': ry--; break;
    }
    deliverToHouse(houses,rx,ry)
  }
})

console.log("Santa and his Robot delivered to %s houses!", Object.keys(houses).length);
