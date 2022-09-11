const Router = require ('@koa/router');
const router = new Router();

const index = require('./index.js');

router.use(index.routes());

module.exports = router;