// // lesson 3
// var fs = require('fs');
// var text = fs.readFileSync(process.argv[2],'utf-8')
// var howManyNewLines = text.split('\n').length -1
//
// console.log(howManyNewLines)

// // lesson 4
// var fs = require('fs')
//
// function howManyNewLines() {
//   fs.readFile(process.argv[2],'utf-8',function doneReadingNowSplit(err, fileContents) {
//     console.log(fileContents.split('\n').length -1);
//   })
// }
//
// howManyNewLines()

// // lesson 5
// var fs = require('fs')
// var path = require('path')
//
//
//   fs.readdir(process.argv[2],function doneReadingNowSplit(err, files) {
//
//     for (var i = 0; i < files.length; i++) {
//         if (path.extname(files[i]) == "." + process.argv[3]) {
//           console.log(files[i])
//         }
//     }
//   })
//
//   or
//
//   var fs = require('fs')
//   var path = require('path')
//
//
//   fs.readdir(process.argv[2], function doneReadingNowSplit(err, files) {
//
//     files.forEach(function(file) {
//       if (path.extname(file) == "." + process.argv[3]) {
//         console.log(file)
//       }
//     })
//
//   })

// lesson 6

var fileFilter = require('./fileFilter.js')

fileFilter("./","txt",function printout(stuff) {
  console.log(stuff);
})
