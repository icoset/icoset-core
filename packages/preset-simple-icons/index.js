const path = require('path');

module.exports = function getPath() {
  return {
    directory: path.resolve(__dirname, '../../simple-icons/icons'),
  };
}