module.exports = (sequelize, DataTypes) => {
  const model = sequelize.custDefine('user', {
    name: {
      type: DataTypes.STRING,
      unique: 'true',
    },
    password: {
      type: DataTypes.STRING,
    },
  });

  model.associate = () => {};
  return model;
};
