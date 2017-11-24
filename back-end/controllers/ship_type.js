const model = require('../models');
const ship_type = model.ship_type;

const getShipTypes = async(ctx, next) => {
  console.log('enter getShipTypes');

}
const setShipTypes = async(ctx, next) => {
  console.log('enter setShipTypes');
  const shipType = await ship_type.create({
    ship_type: ctx.request.body.shipType,
    ship_subtype: ctx.request.body.shipSubtype,
  });
  ctx.rest(shipType);
}

module.exports = {
  'GET /v1/ship_types': getShipTypes,
  'POST /v1/ship_types': setShipTypes,
}
