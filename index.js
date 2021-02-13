const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
// 前缀方法
const usersRouter = new Router({ prefix: '/users' })


router.get('/', (ctx) => {
  ctx.body = '这是主页'
});

usersRouter.get('/', (ctx) => {
  ctx.body = '这是用户列表'
});

usersRouter.post('/', (ctx) => {
  ctx.body = '这是创建用户接口'
});

usersRouter.get('/:id', (ctx) => {
  ctx.body = `这是用户 ${ctx.params.id}`;
})

app.use(router.routes());
app.use(usersRouter.routes());
app.use(usersRouter.allowedMethods());


app.listen(3000);