//引入koa
const koa = require('koa');
const router = require('koa-router')();
const app = new koa();
//const router = new Router();

//配置路由
//ctx 上下文 context 包含了request和response等信息
router.get('/', async(ctx) => {
  ctx.body = "首页"; //返回数据 原声里面的res.writeHead() res.send();
})


router.get('/newscontent/:aid', async(ctx) => {
  //获取动态路由的传值
  console.log(ctx.params);
  ctx.body = '新闻详情';
})

//中间件
app.use(router.routes()); //启动路由
app.use(router.allowedMethods()); //可以配置也可以不配置，建议配置
/**
 * 作用:这是官方文档的推荐用法，我们可以看到router.allowedMethods()用在了路由匹配
 * router.routes()之后，所以在所有路由中间件最后调用，此时根据ctx.status设置response响应头
 */


app.listen(3000);