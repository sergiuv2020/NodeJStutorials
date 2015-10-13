var http = require('http');
var time = require('strftime');
var urlParser = require('url');
var date = new Date()

var server = http.createServer(function (req, res) {
  var parsedUrl = urlParser.parse(req.url,true)
  var parsedTime = new Date(parsedUrl.query['iso'])

  switch (parsedUrl.pathname) {
    case '/api/parsetime':
      if (req.method == 'GET')
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ hour: parsedTime.getHours(), minute: parsedTime.getMinutes(), second: parsedTime.getSeconds()}))
      break;
    case '/api/unixtime':
      if (req.method == 'GET')
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ unixtime: parsedTime.getTime() }))
      break;
    default:
      res.writeHead(404, "Not found", {'Content-Type': 'text/html'});
      res.end('<html><head><title>404 - Not found</title></head><body><h1>Not found.</h1></body></html>');
  }
})

server.listen(Number(process.argv[2]))

// or
// var http = require('http')
//  var url = require('url')
//
//  function parsetime (time) {
//    return {
//      hour: time.getHours(),
//      minute: time.getMinutes(),
//      second: time.getSeconds()
//    }
//  }
//
//  function unixtime (time) {
//    return { unixtime : time.getTime() }
//  }
//
//  var server = http.createServer(function (req, res) {
//    var parsedUrl = url.parse(req.url, true)
//    var time = new Date(parsedUrl.query.iso)
//    var result
//
//    if (/^\/api\/parsetime/.test(req.url))
//      result = parsetime(time)
//    else if (/^\/api\/unixtime/.test(req.url))
//      result = unixtime(time)
//
//    if (result) {
//      res.writeHead(200, { 'Content-Type': 'application/json' })
//      res.end(JSON.stringify(result))
//    } else {
//      res.writeHead(404)
//      res.end()
//    }
//  })
//  server.listen(Number(process.argv[2]))
