const jswt = require('jsonwebtoken');
const Result = require('./result');
const notCheck = ['/api/user/login', '/api/user/register'];


/**
 * 待研究
 * 通过实验如果直接在jswt.verify的回调函数中直接调用next()
 * ctx.response.body后续就无法赋值了
 * 需要先封装成promise 出结果 在外面next()
 * */ 
const valid = (token) => {
    return new Promise((resolve, reject) => {
        jswt.verify(token, 'yunxiang.lee', async (err, decode) => {
            if (err) {
                resolve(false);
            } else {
                resolve(true);
            }   
        })
    })
}

module.exports = async (ctx, next) => {
    const result = new Result();
    if (notCheck.includes(ctx.url)) {
        await next();
    } else {
        if (ctx.url.includes('/api')) {
            const token = ctx.request.header['x-access-token'];
            const isLogin = await valid(token);
            if (isLogin) {
                await next();
            } else {
                ctx.status = 500;
                result.overdue();
                ctx.response.body = result;
                return result;
            }
        } else {
            await next();
        }
    }
}

