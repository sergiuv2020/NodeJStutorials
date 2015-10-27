var httpserver = require('./httpserver.js');
var fs = require('fs');
var split = require('split');
var through2 = require('through2');
var logmag ='';
// var stream = fs.createReadStream('./sourceData.json').pipe(split(JSON.parse())).pipe(process.stdout)
// var duplexermagic = httpserver(stream)
var tr = through2(fs.createReadStream('./sourceData.json'), function(line) {
  // if (line.length === 0) return;

  lineJson = JSON.parse(line)
  logmag = lineJson
})

console.log(logmag);
