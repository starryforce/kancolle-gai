module.exports = (sequelize, DataTypes) => {
  const model = sequelize.custDefine('ship', {
    code: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  });

  model.associate = (models) => {
    // 新增 ship_type_id 外键，为ship_type 表的 id
    models.ship.belongsTo(models.ship_type, {});
    models.ship.hasMany(models.ship_card, {});
  };

  return model;
};
