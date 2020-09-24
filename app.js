// 导入koa2
const Koa = require("koa");
// 创建一个Koa对象表示web app本身:
const app = new Koa();

const router = require('./routes/index')();  

app.use(router.routes()).use(router.allowedMethods());
// 在端口5000监听:
app.listen(5000,() => {
  console.log('\[demo\] route-use-middleware is starting at port 5000')
});