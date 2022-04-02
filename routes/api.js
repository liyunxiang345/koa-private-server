const Router = require('koa-router')
const checkLogin = require('../utils/checkLogin');
const listController = require('../controllers/bannerListController');  
const userController = require('../controllers/userController');
module.exports = () => {  
  const api = new Router()   
  api.use(checkLogin);   
  api.get('/test-list', listController.getList)   
  api.post('/user/register', userController.registerUser)
  api.get('/user/list', userController.getUserList)
  api.post('/user/login', userController.login)
  return api;  
}