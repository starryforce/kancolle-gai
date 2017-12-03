module.exports = (sequelize, DataTypes) => {
  const shipType = sequelize.custDefine('ship_type', {
    ship_type: {
      type: DataTypes.STRING,
      unique: 'type',
    },
    ship_subtype: {
      type: DataTypes.STRING,
      unique: 'type',
    },
  });

  shipType.associate = (models) => {
    models.ship_type.hasMany(models.ship, {
    });
  };

  return shipType;
};
