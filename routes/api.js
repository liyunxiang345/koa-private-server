const Router = require('koa-router')

const listController = require('../controllers/bannerListController');  

module.exports = () => {  
  const api = new Router()      
  api.get('/test-list',listController.getList)   
  return api;  
}