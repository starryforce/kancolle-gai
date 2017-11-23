"use strict";
const db = require('../db.js');

module.exports = (sequelize, DataTypes) => {
  const ship_type = db.defineModel("ship_type", {
    ship_type: DataTypes.STRING,
    ship_subtype: {
      type: DataTypes.STRING,
      unique: true,
    },
  });

  ship_type.associate = (models) => {
  }

  return ship_type;
};
