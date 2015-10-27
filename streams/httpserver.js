// l8
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
// server.listen(3000);

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
// var ws = require('websocket-stream');
// var stream = ws('ws://localhost:8099');
// stream.write('hello\n')

// l11
// var trumpet = require('trumpet');
// var tr = trumpet();
// var through = require('through2');
//
// tr.select('.loud', function (htmlPart) {
//     var stream = htmlPart.createStream();
//     stream.pipe(through(function (buf, _, next) {
//       this.push(buf.toString().toUpperCase());
//       next();
//     })).pipe(stream);
// });
//
// process.stdin.pipe(tr).pipe(process.stdout);

// // Here's the reference solution:
//
//   var trumpet = require('trumpet');
//   var through = require('through2');
//   var tr = trumpet();
//
//   var loud = tr.select('.loud').createStream('.loud');
//   loud.pipe(through(function (buf, _, next) {
//       this.push(buf.toString().toUpperCase());
//       next();
//   })).pipe(loud);
//
//   process.stdin.pipe(tr).pipe(process.stdout);

// // l12
// var spawn = require('child_process').spawn;
// var duplexer = require('duplexer');
//
//     module.exports = function gifMeStuff(cmd, args) {
//         var child= spawn(cmd, args)
//         return duplexer(child.stdin, child.stdout);
//     };

// l13
// var duplexer = require('duplexer');
// var through = require('through2').obj;
//
// module.exports = function (counter) {
//     var countries = {};
//     var input = through(write, end);
//     return duplexer(input, counter);
//
//     function write (row, _, next) {
//         countries[row.country] = (countries[row.country] || 0) + 1;
//         next();
//     }
//     function end (done) {
//         // console.log('gdsvxc');
//         counter.setCounts(countries);
//         console.log(counter);
//         done();
//     }
//
// };
//


//  l14
// var combine = require('stream-combiner');
// var through = require('through2');
// var split = require('split');
// var zlib = require('zlib');
//
// module.exports = function () {
//     var grouper = through(write, end);
//     var current;
//
//     function write (line, _, next) {
//         if (line.length === 0) return next();
//         var row = JSON.parse(line);
//
//         if (row.type === 'genre') {
//             if (current) {
//                 this.push(JSON.stringify(current) + '\n');
//             }
//             current = { name: row.name, books: [] };
//         }
//         else if (row.type === 'book') {
//             current.books.push(row.name);
//         }
//         next();
//     }
//     function end (next) {
//         if (current) {
//             this.push(JSON.stringify(current) + '\n');
//         }
//         next();
//     }
//
//     return combine(split(), grouper, zlib.createGzip());
// };

//  l15
// var crypto = require('crypto');
//
// var stream = crypto.createDecipher('aes256',process.argv[2]);
// process.stdin.pipe(stream).pipe(process.stdout)

// l16
// var crypto = require('crypto');
// var zlib = require('zlib');
// var tar = require('tar');
// var through = require('through2');
// var fs = require('fs');
//
//
// var streamDecipher = crypto.createDecipher(process.argv[2], process.argv[3]);
// var decompresser = zlib.createGunzip()
// var parser = tar.Parse();
//
// parser.on('entry', function (entry) {
//   if (entry.type !== 'File') {
//     return
//   }
//
//   var tr = through(function(buf, _, next) {
//     this.push(buf.toString() + ' ' + entry.path + '\n');
//     next();
//   });
//
//   var hasher = crypto.createHash('md5', {
//     encoding: 'hex'
//   })
//
//   entry
//     .pipe(hasher)
//     .pipe(tr)
//     .pipe(process.stdout)
//
// })
//
// process.stdin
//   .pipe(streamDecipher)
//   .pipe(decompresser)
//   .pipe(parser);
//




//   // Here's the reference solution:
//
//   var crypto = require('crypto');
//   var tar = require('tar');
//   var zlib = require('zlib');
//   var concat = require('concat-stream');
//
//   var parser = tar.Parse();
//   parser.on('entry', function (e) {
//       if (e.type !== 'File') return;
//
//       var h = crypto.createHash('md5', { encoding: 'hex' });
//       e.pipe(h).pipe(concat(function (hash) {
//           console.log(hash + ' ' + e.path);
//       }));
//   });
//
//   var cipher = process.argv[2];
//   var pw = process.argv[3];
//   process.stdin
//       .pipe(crypto.createDecipher(cipher, pw))
//       .pipe(zlib.createGunzip())
//       .pipe(parser)
//   ;
