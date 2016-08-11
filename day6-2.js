#!/usr/bin/env node

var input = require('./day6.json');

/*
 * Functions
 */

var init_array = function(x_dim,y_dim) {
  var grid = new Array(x_dim);
  for(var i=0;i<x_dim;i++) {
    grid[i] = new Array(y_dim);
    for(var j=0;j<y_dim;j++) {
      grid[i][j] = 0;
    }
  }
  return grid;
}

var commands = {
  'turn on': function(val) {
    return val + 1;
  },
  'turn off': function(val) {
    return (val - 1 > 0) ? val - 1 : 0;
  },
  'toggle': function(val) {
    return val + 2;
  }
}

var take_action = function(grid,cmd,sx,sy,ex,ey) {
  for (var i=sx;i<=ex;i++) {
    for (var j=sy;j<=ey;j++) {
      grid[i][j] = cmd(grid[i][j]);
    }
  }
}

var count_array_lights = function(ary) {
  var count = 0;
  ary.map(function(valx) {
    valx.map(function(valy) {
      if (valy) {
        count += valy;
      }
    });
  });
  return count;
}

/*
 * Main
 */

// Initialize the Array
var light_grid = init_array(1000,1000);

for(var i=0; i<input.length; i++) {
  var parts = input[i].match(/(turn on|turn off|toggle) (\d{1,3}),(\d{1,3}) through (\d{1,3}),(\d{1,3})/);
  var cmd = parts[1];
  var sx = parseInt(parts[2]);
  var sy = parseInt(parts[3]);
  var ex = parseInt(parts[4]);
  var ey = parseInt(parts[5]);
  // console.log("input: %s",input[i]);
  // console.log("cmd: %s",cmd);
  // console.log("start: %s x %s",sx,sy);
  // console.log("end: %s x %s",ex,ey);
  // console.log("area: %s",(ex-sx+1)*(ey-sy+1));
  take_action(light_grid,commands[cmd],sx,sy,ex,ey);
}

console.log("Total lights on: %s", count_array_lights(light_grid));
