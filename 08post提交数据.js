//引入koa
const koa = require('koa');
const router = require('koa-router')();
const views = require('koa-views');
const common = require('./module/common');
const bodyparser = require('koa-bodyparser');
const app = new koa();

//配置模板引擎中间件, --第三方中间件
app.use(views('views', {
  extension: 'ejs'
}))

//配置路由
//ctx 上下文 context 包含了request和response等信息
router.get('/', async(ctx) => {
  ctx.body = "首页"; //返回数据 原声里面的res.writeHead() res.send();
}).get('/news', async(ctx) => {
  ctx.body = "新闻页面";
})

//中间件
app.use(router.routes()); //启动路由
app.use(router.allowedMethods()); //可以配置也可以不配置，建议配置
/**
 * 作用:这是官方文档的推荐用法，我们可以看到router.allowedMethods()用在了路由匹配
 * router.routes()之后，所以在所有路由中间件最后调用，此时根据ctx.status设置response响应头
 */

app.use(bodyparser());
router.post('/xxx', async(ctx) => {
  //获取表单提交的数据
  //原声
  /* let data = common.getPostData(ctx);
  ctx.body = data; */
  ctx.body = ctx.request.body;
})


app.listen(3000);