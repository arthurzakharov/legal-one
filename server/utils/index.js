const fs = require('fs');

const readJson = (path, cb) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      cb(err)
    } else {
      cb(null, data);
    }
  });
};

module.exports = {
  readJson,
};
