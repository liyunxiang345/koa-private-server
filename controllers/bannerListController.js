'use strict'; 

exports.getList = async (ctx,next) => {
  ctx.status = 200;
  ctx.body = {
    message: 'ok',
    data: {
      banner_list:[
        {url: "https://website-vue.oss-cn-beijing.aliyuncs.com/image/banner-1.jpg"},
        {url: "https://website-vue.oss-cn-beijing.aliyuncs.com/image/banner-2.jpg"},
        {url: "https://website-vue.oss-cn-beijing.aliyuncs.com/image/banner-3.jpg"},
        {url: "https://website-vue.oss-cn-beijing.aliyuncs.com/image/banner-4.jpg"}
      ]
    }
  };
  return;
}