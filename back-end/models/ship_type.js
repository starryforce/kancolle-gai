const db = require('../db');

module.exports = db.defineModel('ship_type', {
  ship_type: db.STRING,
  ship_subtype: {
    type: db.STRING,
    unique: true,
  },
});
