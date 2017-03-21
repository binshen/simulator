/**
 * Created by bin.shen on 21/03/2017.
 */

module.exports.index = async function (ctx) {
    ctx.body = 'Hello Koa 2.0!';
};

module.exports.test = async function (ctx) {
    await ctx.render('test', { a: 123456789 });
};