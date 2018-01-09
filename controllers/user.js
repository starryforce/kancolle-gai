const models = require('../models');
const crypto = require('crypto');

const {
  user,
} = models;

const signup = async (ctx) => {
  console.log('enter signup');
  const sha1 = crypto.createHash('sha1');
  sha1.update(ctx.request.body.password);
  const result = await user.create({
    name: ctx.request.body.name,
    password: sha1.digest('hex'),
  });
  ctx.rest(result);

  console.log(`created: ${JSON.stringify(result)}`);
};

const signin = async (ctx) => {
  console.log('enter signin');
  const {
    name,
    password,
  } = ctx.request.body;
  const isExist = await user.findOne({
    attributes: ['name'],
    where: {
      name,
    },
  });
  if (!isExist) {
    throw {
      code: 'auth:user_not_found',
      message: 'user not found',
    };
  }
  const sha1 = crypto.createHash('sha1');
  sha1.update(password);
  const userInfo = await user.findOne({
    attributes: ['password'],
    where: {
      name,
    },
  });
  if (sha1.digest('hex') !== userInfo.password) {
    throw {
      code: 'auth:password_not_correct',
      message: 'password does not match the user',
    };
  }
  ctx.session.name = name;
  ctx.rest({
    result: 'success',
  });
};

const checkLogin = async (ctx) => {
  if (ctx.session.name) {
    ctx.rest({
      result: 'logined',
    });
  }
};

const logout = async (ctx) => {
  if (!ctx.session.name) {
    throw {
      code: 'auth:is_not_login',
      message: 'not login',
    };
  }
  ctx.session.name = null;
  ctx.rest({
    result: 'logout success',
  });
};

module.exports = {
  'POST /v1/register': signup,
  'POST /v1/login': signin,
  'POST /v1/logout': logout,
  'POST /v1/checkLogin': checkLogin,
};
