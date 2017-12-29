module.exports = (sequelize, DataTypes) => {
  const model = sequelize.custDefine('ship_card', {
    name: DataTypes.STRING,
    preview: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    rate: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    download_times: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    file_name: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    creator: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    source_url: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    pixiv_id: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    uploader: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
  });

  model.associate = (models) => {
    models.ship_card.belongsTo(models.ship, {});
  };

  return model;
};
