const fs = require('fs').promises;

const errorMessage = { message: 'Json is invalid' };

const readJson = (path) => fs.readFile(path)
  .then((text) => {
    try {
      return JSON.parse(text);
    } catch (_) {
      throw errorMessage;
    }
  });

module.exports = readJson;
