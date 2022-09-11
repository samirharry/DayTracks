const logger = require('koa-logger');
const Koa = require ('koa');

const router = require('./API/router.js');
console.log(router);
const app = new Koa();


app.use(logger());
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);