const models = require('../models');

const { ship } = models;

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
    where: { ship_type_id: shipType },
  });
  ctx.rest(ships);
  console.log(`query: ${JSON.stringify(ships)}`);
};

module.exports = {
  'POST /v1/ships': setShip,
  'GET /v1/ships': getShipByType,
};
