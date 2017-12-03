module.exports = (sequelize, DataTypes) => {
  const shipCard = sequelize.custDefine('ship_card', {
    name: DataTypes.STRING,
    ship_name: {
      type: DataTypes.STRING,
    },
  });

  shipCard.associate = () => {};

  return shipCard;
};
