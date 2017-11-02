const env = process.env.NODE_ENV || 'development';

const developmentConfig = {
  username: 'www',
  password: 'www',
  database: 'nodejs',
  host: '127.0.0.1',
  dialect: 'mysql',
  port: 3306
};
const testConfig = {
  username: 'www',
  password: 'www',
  database: 'test',
  host: '127.0.0.1',
  dialect: 'mysql',
  port: 3306
};
const productionConfig = {
  username: 'www',
  password: 'www',
  database: 'production',
  host: '127.0.0.1',
  dialect: 'mysql',
  port: 3306
};

let config = {};
if (env === 'test') {
  console.log('Load testConfig...');
  config = testConfig;
} else if (env === 'production') {
  console.log('Load productionConfig...');
  config = productionConfig;
} else {
  console.log('Load developmentConfig...');
  config = developmentConfig;
}
module.exports = config;
