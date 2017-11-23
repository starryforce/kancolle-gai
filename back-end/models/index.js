const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const db = require('../db');

const models = {};
fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (file.endsWith('.js')) && (file.indexOf('.') !== 0) && (file !== basename);
  })
  .forEach((file) => {
    console.log(`import model from file ${file}...`);
    let model = db.sequelize.import(path.join(__dirname, file));
    models[model.name] = model;
  })

Object.keys(models).forEach(modelName => {
  if (models[modelName].hasOwnProperty('associate')) {
    models[modelName].associate(models);
  }
});

module.exports = models;

module.exports.sync = () => {
  return db.sync();
};
