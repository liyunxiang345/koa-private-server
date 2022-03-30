const Router = require('koa-router')

const listController = require('../controllers/bannerListController');  
const userController = require('../controllers/userController');
module.exports = () => {  
  const api = new Router()      
  api.get('/test-list',listController.getList)   
  api.post('/user/register', userController.registerUser)
  api.get('/user/list',userController.getUserList)
  return api;  
}