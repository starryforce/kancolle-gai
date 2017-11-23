"use strict";
const db = require('../db.js');

module.exports = (sequelize, DataTypes) => {
  const ship = db.defineModel("ship", {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    ship_subtype: {
      type: DataTypes.STRING,
    }
  });

  ship.associate = (models) => {
  }

  return ship;
};
