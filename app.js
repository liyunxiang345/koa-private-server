// 导入koa2
const Koa = require("koa");
// 创建一个Koa对象表示web app本身:
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');
const router = require('./routes/index')();  
// const MONGO_BASE_URL = 'mongodb://localhost/cloudsor';
const MONGO_BASE_URL = 'mongodb://127.0.0.1:27017/local';

const MONGO_BASE_OPT = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
const app = new Koa();
app.use(cors());
mongoose.connect(MONGO_BASE_URL, MONGO_BASE_OPT).then(() => {
    console.info('MongoDB is Ready')
}).catch(err => {
    console.error('connect error', err)
})



app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods())
// 在端口5000监听:
app.listen(5000,() => {
  console.log('端口5000开始运行')
});   