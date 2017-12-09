const models = require('../models');

const { ship_type } = models;

const getShipTypes = async (ctx) => {
  console.log('enter getShipTypes');
  const result = await ship_type.findAll();
  const response = [];
  const arr = [];
  result.forEach((item) => {
    arr.push(item.ship_type);
  });
  const unique = [...new Set(arr)];
  unique.forEach((item) => {
    response.push({
      value: item,
      label: item,
      children: [],
    });
  });
  result.forEach((item) => {
    for (let i = 0; i < response.length; i += 1) {
      if (item.ship_type === response[i].value) {
        response[i].children.push({
          value: item.id,
          label: item.ship_subtype,
        });
      }
    }
  });
  ctx.rest(response);
};
const setShipTypes = async (ctx) => {
  console.log('enter setShipTypes');
  const result = await ship_type.create({
    ship_type: ctx.request.body.shipType,
    ship_subtype: ctx.request.body.shipSubtype,
  });
  ctx.rest(result);
  console.log(`created: ${JSON.stringify(result)}`);
};

module.exports = {
  'GET /v1/ship_types': getShipTypes,
  'POST /v1/ship_types': setShipTypes,
};
