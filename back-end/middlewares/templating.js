const nunjucks = require('nunjucks');

function createEnv(path, opts) {
  const autoescape = opts.autoescape === undefined ? true : opts.autoescape;
  const noCache = opts.noCache || false;
  const watch = opts.watch || false;
  const throwOnUndefined = opts.throwOnUndefined || false;
  const env = new nunjucks.Environment(new nunjucks.FileSystemLoader(path || 'views', {
    noCache,
    watch,
  }), {
    autoescape,
    throwOnUndefined,
  });
  if (opts.filters) {
    Object.entries(opts.filters).forEach(([key, value]) => {
      env.addFilter(key, value);
    });
  }
  return env;
}

function templating(path, opts) {
  const env = createEnv(path, opts);
  return async (ctx, next) => {
    ctx.render = function render(view, model) {
      ctx.response.body = env.render(view, Object.assign({}, ctx.state || {}, model || {}));
      ctx.response.type = 'text/html';
    };
    await next();
  };
}
module.exports = templating;
