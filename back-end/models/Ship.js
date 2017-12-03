module.exports = (sequelize, DataTypes) => {
  const ship = sequelize.custDefine('ship', {
    code: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  });

  ship.associate = (models) => {
    models.ship.belongsTo(models.ship_type, {
    });
  };

  return ship;
};
