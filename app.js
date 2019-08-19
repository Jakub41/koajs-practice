const Koa = require('koa');
const KoaRoutter = require('koa-router');
const json = require('koa-json');

const app = new Koa();
const router = new KoaRoutter();

// Json Prettier Middleware
app.use(json());

// Simple Middleware Example
//app.use(async ctx => ctx.body = { msg:'Hello World' });

// Routes
router.get('/test', ctx => (ctx.body = 'hello test'));

// Router Middleware
app.use(router.routes()).use(router.allowedMethods());

// Server Listner
app.listen(3000, () => console.log('Server Started...'));
