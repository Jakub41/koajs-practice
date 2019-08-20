const Koa = require('koa');
const KoaRoutter = require('koa-router');
const json = require('koa-json');
const path = require('path');
const render = require('koa-ejs');

const app = new Koa();
const router = new KoaRoutter();

// A Global To Simulate Data From DB -> Replace with DB
const stuff = ['My Family', 'Sport', 'Music']; 

// Json Prettier Middleware
app.use(json());

// Simple Middleware Example
//app.use(async ctx => ctx.body = { msg:'Hello World' });

// Render for tmeplates
render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'layout',
    viewExt: 'html',
    cache: false,
    debug: false
});

// Index
router.get('/', async ctx => {
    await ctx.render('index', {
        title: 'Koa new stuff',
        stuff: stuff
    });
});

// Routes
router.get('/test', ctx => (ctx.body = 'hello test'));

// Router Middleware
app.use(router.routes()).use(router.allowedMethods());

// Server Listner
app.listen(3000, () => console.log('Server Started...'));
