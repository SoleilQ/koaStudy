//引入koa
const koa = require('koa');
const Router = require('koa-router')();
const app = new koa();
//const router = new Router();

//配置路由
//ctx 上下文 context 包含了request和response等信息
router.get('/', async(ctx) => {
  ctx.body = "首页"; //返回数据 原声里面的res.writeHead() res.send();
})

router.get('/newscontent', async(ctx) => {
  /*  在 koa2 中 GET 传值通过 request 接收，但是接收的方法有两种：query 和 querystring。
query：返回的是格式化好的参数对象。 querystring：返回的是请求字符串。 */

  //从ctx中读取get传值2
  console.log(ctx.query); //获取的是对象 推荐
  console.log(ctx.querystring); //获取的是一个字符串
  console.log(ctx.url); //获取url地址

  //ctx里面的request里面获取get传值

  console.log(ctx.request.url);
  console.log(ctx.request.query);
  console.log(ctx.request.querystring);

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