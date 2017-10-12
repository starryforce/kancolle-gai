const db = require('../db');

module.exports = db.defineModel('ships', {
  identifier: {
    type: db.INTEGER(4),
    unique: true
  },
  name: db.STRING,
  type: db.STRING,
  subType: db.STRING,
  level: db.STRING,
});
