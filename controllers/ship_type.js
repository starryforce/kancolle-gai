const models = require('../models');

const { ship_type } = models;

const getShipTypes = async (ctx) => {
  console.log('enter getShipTypes');
  const shipTypes = await ship_type.findAll({
    attributes: ['ship_type', 'ship_subtype', 'id'],
  });
  ctx.rest(shipTypes);
  console.log(`got: ${JSON.stringify(shipTypes)}`);
};
const setShipType = async (ctx) => {
  console.log('enter setShipType');
  const newShipType = await ship_type.create({
    ship_type: ctx.request.body.shipType,
    ship_subtype: ctx.request.body.shipSubtype,
  });
  ctx.rest(newShipType);
  console.log(`created: ${JSON.stringify(newShipType)}`);
};

module.exports = {
  'GET /v1/ship_types': getShipTypes,
  'POST /v1/ship_types': setShipType,
};
