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

module.exports = {
  'POST /v1/ships': setShip,
};
