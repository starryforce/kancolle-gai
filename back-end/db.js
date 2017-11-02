const Sequelize = require('sequelize');
const uuid = require('node-uuid');
const config = require('./config/sequelize.js');

console.log('init sequelize...');

function generateId() {
  return uuid.v4();
}

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  port: config.port,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  define: {
    underscored: true,
    underscoredAll: true,
  }
});

function defineModel(name, attributes) {
  var attrs = {};
  for (let key in attributes) {
    let value = attributes[key];
    if (typeof value === 'object' && value['type']) {
      value.allowNull = value.allowNull || false;
      attrs[key] = value;
    } else {
      attrs[key] = {
        type: value,
        allowNull: false
      };
    }
  }
  attrs.id = {
    type: Sequelize.STRING(50),
    primaryKey: true,
    unique: true
  };
  attrs.created_at = {
    type: Sequelize.BIGINT,
    allowNull: false
  };
  attrs.updated_at = {
    type: Sequelize.BIGINT,
    allowNull: false
  };
  attrs.version = {
    type: Sequelize.BIGINT,
    allowNull: false
  };

  return sequelize.define(name, attrs, {
    tableName: name,
    freezeTableName: true,
    timestamps: false,
    hooks: {
      beforeValidate: function (obj) {
        let now = Date.now();
        if (obj.isNewRecord) {
          console.log('will create entity...' + obj);
          if (!obj.id) {
            obj.id = generateId();
          }
          obj.created_at = now;
          obj.updated_at = now;
          obj.version = 0;
        } else {
          console.log('will update entity...');
          obj.updated_at = now;
          obj.version++;
        }
      }
    }
  });
}

const db = {
  defineModel: defineModel,
  sync: () => {
    // only allow create ddl in non-production environment:
    if (process.env.NODE_ENV !== 'production') {
      console.log('db.js - sync() called');
      return sequelize.sync({
        force: true
      });
    } else {
      throw new Error('Cannot sync() when NODE_ENV is set to \'production\'.');
    }
  }
};
const TYPES = ['STRING', 'INTEGER', 'BIGINT', 'TEXT', 'DOUBLE', 'DATEONLY', 'BOOLEAN'];
for (let type of TYPES) {
  db[type] = Sequelize[type];
}

db.generateId = generateId;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
