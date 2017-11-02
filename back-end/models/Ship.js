const db = require('../db');
const ship_type = require('./ship_type');

module.exports = db.defineModel('ship', {
  name: {
    type: db.STRING,
    unique: true,
  },
  ship_subtype: {
    type: db.STRING,
    references: {
      model: ship_type,
      key: 'ship_subtype',
    }
  }
});
