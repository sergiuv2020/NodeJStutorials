  var fs = require('fs')
  var path = require('path')

function fileFilter(filePath, extension, callback){

    fs.readdir(filePath,function doneReadingNowSplit(err, files) {
      if (err)
          return callback(err)
      for (var i = 0; i < files.length; i++) {
          if (path.extname(files[i]) == "." + extension) {
            callback(files[i])
          }
      }

    })
}

module.exports = fileFilter
