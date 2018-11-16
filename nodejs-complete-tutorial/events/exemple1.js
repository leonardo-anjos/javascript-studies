var fs = require('fs');
var rs = fs.createReadStream('../fileSystemsModules/mynewfile2.txt');
rs.on('open', function () {
  console.log('the file is open');
});