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
  ctx.body = [{ name: '张三' }, { name: '李四' }];
});

usersRouter.post('/', (ctx) => {
  ctx.body = { name: '张三' };
});

usersRouter.get('/:id', (ctx) => {
  ctx.body = { name: '张三' };
})

usersRouter.put('/:id', (ctx) => {
  ctx.body = { name: '张三 法外狂徒' };
})

usersRouter.delete('/:id', (ctx) => {
  ctx.status = 204;
})

app.use(router.routes());
app.use(usersRouter.routes());
app.use(usersRouter.allowedMethods());


app.listen(3000);