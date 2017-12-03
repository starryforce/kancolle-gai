const models = require('./models');

models.sequelize.sync().then(() => {
  console.log('sync done');
  console.log('init db ok.');
  process.exit(0);
}).catch((e) => {
  console.log(`failed with:${e}`);
  process.exit(0);
});
