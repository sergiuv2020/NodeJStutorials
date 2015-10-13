// // l8
// var http = require('http');
// var through = require('through2');
//
// var server = http.createServer(function (req, res) {
//     if (req.method != 'POST')
//       return res.end('send me a POST\n');
//
//     req.pipe(through(function (buf, _, next) {
//         this.push(buf.toString().toUpperCase());
//         next();
//     })).pipe(res);
//
// });
//
// server.listen(process.argv[2]);

// // Here's the reference solution:
//
//   var http = require('http');
//   var through = require('through2');
//
//   var server = http.createServer(function (req, res) {
//       if (req.method === 'POST') {
//           req.pipe(through(function (buf, _, next) {
//               this.push(buf.toString().toUpperCase());
//               next();
//           })).pipe(res);
//       }
//       else res.end('send me a POST\n');
//   });
//   server.listen(parseInt(process.argv[2]));

// // l9
//
// var request = require('request');
// result = request.post('http://localhost:8099')
// process.stdin.pipe(result).pipe(process.stdout)
//
// // Here's the reference solution:
//
//   var request = require('request');
//   var r = request.post('http://localhost:8099');
//   process.stdin.pipe(r).pipe(process.stdout);

// // l10
var ws = require('websocket-stream');
var stream = ws('ws://localhost:8099');
stream.write('hello\n')
