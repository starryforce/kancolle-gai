const models = require('../models');

const {
  ship,
  ship_type,
} = models;

const setShip = async (ctx) => {
  console.log('enter setShip');
  const result = await ship.create({
    code: ctx.request.body.code,
    name: ctx.request.body.name,
    ship_type_id: ctx.request.body.ship_type_id,
  });
  ctx.rest(result);
  console.log(`created: ${JSON.stringify(result)}`);
};
const getShipByType = async (ctx) => {
  console.log('enter getShipByType');
  const shipType = ctx.request.query.type;
  const ships = await ship.findAll({
    attributes: ['id', 'name'],
    where: {
      ship_type_id: shipType,
    },
  });
  ctx.rest(ships);
  console.log(`query: ${JSON.stringify(ships)}`);
};

const getMenu = async (ctx) => {
  console.log('enter getMenu');
  const subtypes = await ship_type.findAll({
    attributes: ['ship_type', 'ship_subtype'],
    include: [{
      model: ship,
      attributes: ['code', 'name'],
    }],
  });
  const menuInfo = [];
  const types = [...new Set(subtypes.map(item => item.ship_type))];
  types.forEach((item) => {
    const subMenu = [];
    for (let i = 0; i < subtypes.length; i += 1) {
      if (item === subtypes[i].ship_type) {
        subMenu.push({
          type: subtypes[i].ship_subtype,
          subs: subtypes[i].ships,
        });
      }
    }
    menuInfo.push({
      type: item,
      subs: subMenu,
    });
  });
  ctx.rest(menuInfo);
  console.log(`query: ${JSON.stringify(menuInfo)}`);
};

module.exports = {
  'POST /v1/ships': setShip,
  'GET /v1/ships': getShipByType,
  'GET /v1/ship_menu': getMenu,
};
