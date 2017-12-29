const models = require('../models');

const {
  ship_card,
  ship,
  ship_type,
} = models;

const setShipCard = async (ctx) => {
  console.log('enter setShipCard');
  const result = await ship_card.create({
    name: ctx.request.body.name,
    preview: ctx.request.body.preview,
    ship_id: ctx.request.body.ship_id,
    file_name: ctx.request.body.file_name,
    creator: ctx.request.body.creator,
    source_url: ctx.request.body.source_url,
    pixiv_id: ctx.request.body.pixiv_id,
    uploader: ctx.request.body.uploader,
  });
  ctx.rest(result);
  console.log(`created: ${JSON.stringify(result)}`);
};

const getShipCards = async (ctx) => {
  console.log('enter getShipCards');
  let result = {};
  if (ctx.request.query.sortMode === 'uploadTime') {
    result = await ship_card.findAll({
      limit: Number(ctx.request.query.limit),
      offset: Number(ctx.request.query.offset),
      order: [
        ['created_at', ctx.request.query.order],
      ],
    });
  }
  if (ctx.request.query.type === 'count') {
    result = await ship_card.count();
  }
  ctx.rest(result);
};

const getShipCard = async (ctx) => {
  console.log('enter getShipCard');
  const result = await ship_card.findById(ctx.params.id, {
    attributes: {
      exclude: ['updated_at', 'version', 'ship_id', 'id', 'rate'],
    },
    include: [{
      model: ship,
      attributes: ['name'],
      include: [{
        model: ship_type,
        attributes: ['ship_type', 'ship_subtype'],
      }],
    }],
  });
  result.dataValues.shipName = result.ship.name;
  result.dataValues.shipType = result.ship.ship_type.ship_type;
  result.dataValues.shipSubtype = result.ship.ship_type.ship_subtype;
  ctx.rest(result);
};

module.exports = {
  'POST /v1/ship_cards': setShipCard,
  'GET /v1/ship_cards': getShipCards,
  'GET /v1/ship_cards/:id': getShipCard,
};
