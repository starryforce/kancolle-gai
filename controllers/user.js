const models = require('../models');
const crypto = require('crypto');

const {
  user,
} = models;

const createUser = async (ctx) => {
  console.log('enter createUser');
  const sha1 = crypto.createHash('sha1');
  sha1.update(ctx.request.body.password);
  const result = await user.create({
    name: ctx.request.body.name,
    password: sha1.digest('hex'),
  });
  ctx.rest(result);

  console.log(`created: ${JSON.stringify(result)}`);
};

const validateUser = async (ctx) => {
  console.log('enter validateUser');
  const sha1 = crypto.createHash('sha1');
  sha1.update(ctx.request.body.password);
  const userInfo = await user.findOne({
    attributes: ['password'],
    where: {
      name: ctx.request.body.name,
    },
  });
  if (sha1.digest('hex') === userInfo.password) {
    console.log(userInfo);
  }
  if (ctx.session.view === undefined) { // 统计访问次数
    ctx.session.view = 0;
  } else {
    ctx.session.view += 1;
  }
  ctx.rest(userInfo);
};

module.exports = {
  'POST /v1/register': createUser,
  'POST /v1/login': validateUser,
};
