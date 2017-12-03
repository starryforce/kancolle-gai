const Sequelize = require('sequelize');
const uuid = require('uuid');
const config = require('./config/sequelize');

const env = process.env.NODE_ENV || 'development';

console.log('init sequelize...');
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  port: config.port,
  operatorsAliases: false, // 为了安全性禁用运算符别名
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  define: {
    underscored: true,
    underscoredAll: true,
  },
});

const custSequelize = Object.create(sequelize);

function generateId() {
  return uuid.v4();
}

function custDefine(name, attributes) {
  const attrs = {};
  Object.entries(attributes).forEach(([key, value]) => {
    if (typeof value === 'object' && value.type) {
      attrs[key] = value;
      attrs[key].allowNull = value.allowNull || false;
    } else {
      attrs[key] = {
        type: value,
        allowNull: false,
      };
    }
  });
  attrs.id = {
    type: Sequelize.STRING(50),
    primaryKey: true,
    unique: true,
  };
  attrs.created_at = {
    type: Sequelize.BIGINT,
    allowNull: false,
  };
  attrs.updated_at = {
    type: Sequelize.BIGINT,
    allowNull: false,
  };
  attrs.version = {
    type: Sequelize.BIGINT,
    allowNull: false,
  };

  return this.define(name, attrs, {
    tableName: name,
    freezeTableName: true,
    timestamps: false,
    hooks: {
      beforeValidate(obj) {
        const now = Date.now();
        if (obj.isNewRecord) {
          console.log(`will create entity...${obj}`);
          if (!obj.id) {
            obj.id = generateId();
          }
          obj.created_at = now;
          obj.updated_at = now;
          obj.version = 0;
        } else {
          console.log('will update entity...');
          obj.updated_at = now;
          obj.version += 1;
        }
      },
    },
  });
}

Object.assign(custSequelize, {
  generateId,
  custDefine,
  custSync() {
    // only allow create ddl in non-production environment:
    if (env !== 'production') {
      console.log('db.js - sync() called');
      this.sync({
        force: true,
      });
    } else {
      throw new Error('Cannot sync() when NODE_ENV is set to \'production\'.');
    }
  },
});

module.exports = custSequelize;
