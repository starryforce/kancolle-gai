const fs = require('fs');
const path = require('path');
const custSequelize = require('../custSequelize');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);

const models = {};
fs
  .readdirSync(__dirname)
  .filter(file => (file.endsWith('.js')) && (file.indexOf('.') !== 0) && (file !== basename))
  .forEach((file) => {
    console.log(`import model from file ${file}...`);
    const model = custSequelize.import(path.join(__dirname, file));
    models[model.name] = model;
  });

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = custSequelize;
models.Sequelize = Sequelize;

module.exports = models;
