/**
 * Created by bin.shen on 21/03/2017.
 */

'use strict';

const Koa = require('koa');
const views = require('koa-views');
const convert = require('koa-convert');

const app = new Koa();

app.use(views(__dirname + '/views', {
    map: {
        html: 'ejs'
    }
}));

// const render = require('koa-ejs');
// render(app, {
//     root: path.join(__dirname, 'view'),
//     layout: 'template',
//     viewExt: 'html',
//     cache: false,
//     debug: true
// });

app.use(async (ctx, next) => {
    try {
        await next();
        if (ctx.status === 404) ctx.throw(404)
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = err.body || err.message;
        console.error(ctx.url);
        console.error(err.toString());
        console.error(err.stack+"\n");
    }
});


const router = require('./controllers/index')

app.use(convert(router.routes()));
app.use(convert(router.allowedMethods()));

app.proxy = true;
app.listen(3000, () => console.log('Koa start at 3000...'));