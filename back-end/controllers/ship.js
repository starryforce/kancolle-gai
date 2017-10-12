// 存储Product列表，相当于模拟数据库:
var products = [{
  name: 'iPhone',
  price: 6999
}, {
  name: 'Kindle',
  price: 999
}];
const getShips = async(ctx, next) => {

}

const setShip = async(ctx, next) => {
  ctx.response.type = 'application/json';
  ctx.response.body = {
    products: products
  };
}

module.exports = {
  'GET /v1/ships': getShips,
  'POST /v1/ships': setShip,
}
