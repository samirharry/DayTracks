const Router = require ('@koa/router');
const router = new Router({
    prefix: '/'
});

router.get('/',(ctx)=>{
    ctx.body = {'hola': 'ahjasdn'}
}
);

module.exports = router ;