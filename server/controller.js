var fs = require('fs')

module.exports.index = function(req, res) {
  fs.readFile('./index.html', 'utf8', function(err, page){
    if (err) console.error(err)
    res.send(page);
  })
}