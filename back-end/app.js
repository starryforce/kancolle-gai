const isProduction = process.env.NODE_ENV === 'production';
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const controller = require('./controller');
const templating = require('./middlewares/templating');
const rest = require('./middlewares/rest')
const model = require('./model');

const app = new Koa();

app.use(async(ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  var
    start = new Date().getTime(),
    execTime;
  await next();
  execTime = new Date().getTime() - start;
  ctx.response.set('X-Response-Time', `${execTime}ms`);
});
// 静态资源处理
if (!isProduction) {
  let staticFiles = require('./middlewares/static-files');
  app.use(staticFiles('/static/', __dirname + '/static'));
}
// 请求头解析
app.use(bodyParser());
// 模板
app.use(templating('views', {
  noCache: !isProduction,
  watch: !isProduction
}));
// 绑定rest方法
app.use(rest.restify());
// 路由
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');
