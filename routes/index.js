const Router = require("koa-router");

const home = require('./home')(); 
const api = require('./api')();
const page = require('./page')();
module.exports = () => {  
  // 装载所有子路由  
  let router = new Router()
  router.use('/', home.routes(), home.allowedMethods())    
  router.use('/api', api.routes(), api.allowedMethods())   
  router.use('/page', page.routes(), page.allowedMethods())
  return router;  
}