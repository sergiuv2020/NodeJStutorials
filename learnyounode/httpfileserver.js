// var http = require('http');
// var fs = require('fs');
//
// var server = http.createServer(function (req, res) {
//       var source = fs.createReadStream(process.argv[3])
//       source.pipe(res)
// })
// server.listen(Number(process.argv[2]))

// var http = require('http')
// var bl = require('bl')
//
// var server = http.createServer(function (req, res) {
//       if (req.method == 'POST') {
//         req.on('data',function (requestData) {
//         responseData = requestData.toString().toUpperCase()
//         res.write(responseData.toString())
//         })
//       } else {
//         res.end('Method not Supported')
//       }
// })
// server.listen(Number(process.argv[2]))

var http = require('http')
var map = require('through2-map')

var server = http.createServer(function (req, res) {
  if (req.method != 'POST')
    return res.end('send me a POST\n')

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(Number(process.argv[2]))
