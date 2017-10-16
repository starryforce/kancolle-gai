const Ship = require('../models/Ship');
const getShips = async(ctx, next) => {
  let result = await Ship.findAll({
    where: {
      name: 'Odie',
    }
  });
  ctx.rest(result);
}

const setShip = async(ctx, next) => {
  console.log('enter setShip');
  let kandoel = await Ship.create({
    id: 'd-1',
    identifier: 110,
    name: 'Odie',
    type: 'BattleShip',
    subType: 'kango',
    level: 'tosfsd',
  });
  console.log('created: ' + JSON.stringify(kandoel));

  ctx.rest(kandoel);
}

module.exports = {
  'GET /v1/ships': getShips,
  'POST /v1/ships': getShips,
}
