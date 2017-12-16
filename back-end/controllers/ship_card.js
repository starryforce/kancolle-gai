const models = require('../models');

const {
  ship_card,
} = models;

const setShipCard = async (ctx) => {
  console.log('enter setShipCard');
  const result = await ship_card.create({
    preview: ctx.request.body.preview,
    name: ctx.request.body.name,
    ship_id: ctx.request.body.ship_id,
    download_url: ctx.request.body.download_url,
    creator: ctx.request.body.creator,
    source_url: ctx.request.body.source_url,
  });
  ctx.rest(result);
  console.log(`created: ${JSON.stringify(result)}`);
};

module.exports = {
  'POST /v1/ship_cards': setShipCard,
};
