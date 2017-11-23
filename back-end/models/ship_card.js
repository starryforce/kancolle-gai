"use strict";
const db = require('../db.js');

module.exports = (sequelize, DataTypes) => {
  const ship_card = db.defineModel("ship_card", {
    name: DataTypes.STRING,
    ship_name:{
      type:DataTypes.STRING,
    }
  });

  ship_card.associate = (models) => {
  }

  return ship_card;
};
