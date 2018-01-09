const models = require('./models');
const shipTypes = require('./initDatas/shipTypes.json');
const ships = require('./initDatas/ships.json');

const {
  ship,
  ship_type,
  ship_card,
} = models;

const initTestDatas = async() => {
  console.log('init testDatas');
  await ship_type.bulkCreate(shipTypes, {
    individualHooks: true,
    validate: true,
  });
  for (let item of ships) {
    let result = await ship_type.findOne({
      where: {
        ship_subtype: item.ship_type,
      },
    });
    await result.createShip({name,code}=item);
  }

  process.exit(0);
}

(async function f() {
  await models.sequelize.custSync();
  console.log('sync done');
  console.log('init db ok.');
  await initTestDatas();
})();
