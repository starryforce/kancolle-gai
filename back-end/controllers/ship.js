const model = require('../models');
const ship = model.ship

const setShip = async(ctx, next) => {
  console.log('enter setShip');
  var a = Math.random().toString();
  let kancolle = await ship.create({
    name: a,
    ship_subtype: a,
  });
  console.log('created: ' + JSON.stringify(kancolle));

  ctx.rest(kancolle);
}

module.exports = {
  'GET /v1/ships': setShip,
  'POST /v1/ships': setShip,
}
