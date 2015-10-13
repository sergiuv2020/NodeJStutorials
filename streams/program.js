// // l1
// console.log('beep boop');

// // l2
// var fs = require('fs');
// fs.createReadStream(process.argv[2]).pipe(process.stdout)

// // l3
// process.stdin.pipe(process.stdout)

// // l4
// var through = require('through2');
// stream = through(write,end)
//
// function write (buffer, encoding, next) {
//     this.push(buffer.toString().toUpperCase());
//     next();
// }
//
// function end (done) {
//     done();
// }
//
// process.stdin
//         .pipe(stream)
//         .pipe(process.stdout)

// or
// var through = require('through2');
// var tr = through(function (buf, _, next) {
//     this.push(buf.toString().toUpperCase());
//     next();
// });
// process.stdin.pipe(tr).pipe(process.stdout);

// // l5
// var split = require('split');
// var through = require('through2');
// var lineNumber = 0
//
// var tr = through(function (buf, _, next) {
//     if (lineNumber % 2 === 0){
//       this.push(buf.toString().toUpperCase() + '\n');
//       lineNumber++
//     } else {
//       this.push(buf.toString().toLowerCase() + '\n');
//       lineNumber++
//     }
//     next();
// });
// process.stdin
//         .pipe(split())
//         .pipe(tr)
//         .pipe(process.stdout);
//
//
// // or
//
// var through = require('through2');
// var split = require('split');
//
// var lineCount = 0;
// var tr = through(function (buf, _, next) {
//     var line = buf.toString();
//     this.push(lineCount % 2 === 0
//         ? line.toLowerCase() + '\n'
//         : line.toUpperCase() + '\n'
//     );
//     lineCount ++;
//     next();
// });
// process.stdin
//     .pipe(split())
//     .pipe(tr)
//     .pipe(process.stdout)
// ;

// // l6
var concat = require('concat-stream');

function processString (data) {
  result = data.toString().split('').reverse().join('');
  process.stdout.write(result);
}

process.stdin.pipe(concat(processString))
//
// or
//
// var concat = require('concat-stream');
//
// process.stdin.pipe(concat(function (buf) {
//   process.stdout.write(buf.toString().split('').reverse().join(''));
// }))
