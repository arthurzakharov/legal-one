const {v4: uuidv4} = require('uuid');

module.exports = (data) => {
  return data.map((d) => ({...d, identifier: uuidv4()}));
};
