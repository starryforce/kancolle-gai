const db = require('../db');
const ship = require('./ship');

module.exports = db.defineModel('ship_card', {
  name: db.STRING,
  ship_name:{
    type:db.STRING,
    reference:{
      model:ship,
      key:'name',
    }
  }
});
