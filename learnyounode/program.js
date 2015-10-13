// // lesson 7
// var http = require('http');
//
// http.get(process.argv[2], function(response){
//   response.on('data', function(data){
//     console.log(data.toString());
//   })
// })
//
// // or simpler
// var http = require('http')
//
// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// })

// // lesson 8
// var http = require('http')
// var bl = require('bl');
// var async = require('async');
// // var urls = [process.argv[2], process.argv[3], process.argv[4]]
//
// var q = async.queue(function getMeTheURLData(url,next) {
//   http.get(url, function (response) {
//     response.pipe(bl(function (err, data) {
//       data = data.toString()
//       console.log(data);
//       next();
//     }))
//   })
// }, 1)
//
// q.push(process.argv[2]);
// q.push(process.argv[3]);
// q.push(process.argv[4]);

// // lesson 9
var net = require('net')
var date = new Date()
var time = require('strftime');

  var server = net.createServer(function (socket) {
    socket.end(time('%F %R', date)+'\n')
  })

server.listen(Number(process.argv[2]))
