//引入koa
const koa = require('koa');
const router = require('koa-router')();
const views = require('koa-views');

const app = new koa();


//配置模板引擎中间件, --第三方中间件
app.use(views('views', {
  extension: 'ejs'
}))

//配置路由
//ctx 上下文 context 包含了request和response等信息
router.get('/', async(ctx) => {
  let title = '你好';
  await ctx.render('index', {
    title: title
  });
});
router.get('/news', async(ctx) => {
  let list = ['111', '222', '333'];
  let content = "<h2>这是一个h2</h2>"
  await ctx.render('news', {
    list: list,
    content: content
  })
})

//中间件
app.use(router.routes()); //启动路由
app.use(router.allowedMethods()); //可以配置也可以不配置，建议配置


app.listen(3000);