module.exports = (sequelize, DataTypes) => {
  const model = sequelize.custDefine('ship_type', {
    ship_type: {
      type: DataTypes.STRING,
      unique: 'type',
    },
    ship_subtype: {
      type: DataTypes.STRING,
      unique: 'type',
    },
  });

  model.associate = (models) => {
    models.ship_type.hasMany(models.ship, {});
  };
  return model;
};
