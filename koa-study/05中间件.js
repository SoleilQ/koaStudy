//引入koa
const koa = require('koa');
const router = require('koa-router')();
const app = new koa();

//koa中间件
//www.xxx.com/news
app.use(async(ctx, next) => {
  console.log('1、这是第一个中间件01'); //1
  await next();
  console.log('5、匹配路由完成以后又会返回来执行中间件')
})

app.use(async(ctx, next) => {
  console.log('2、这是第二个中间件02'); //1
  await next();
  console.log('4、匹配路由完成以后又会返回来执行中间件')
})

router.get('/news', async(ctx) => {
  console.log('3、匹配到了news这个路由')
  ctx.body = '这是一个新闻';
})


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