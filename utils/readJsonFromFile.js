const fs = require('fs').promises;

const readJson = (path) => fs.readFile(path)
  .then((text) => {
    try {
      return JSON.parse(text);
    } catch (_) {
      throw 'Json is invalid';
    }
  });

module.exports = readJson;
