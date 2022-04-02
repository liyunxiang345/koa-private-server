const User = require('../models/User');
const _ = require('lodash');
const xss = require('xss');
const $token = require('../utils/token');
const Result = require('../utils/result');
exports.getUserList = async (ctx, next) => {
    const data = await User.find();
    const result = new Result();
    result.update({ data });
    ctx.response.body = result;
    console.log(ctx.response);
    return result
}

exports.registerUser = async (ctx, next) => {
    const { username, password } = ctx.request.body;
    const result = new Result();
    const newUser = new User({
        username: xss(_.trim(username)),
        password: xss(_.trim(password))
    })
    const query = {
        username: xss(_.trim(username))
    }
    try {
        let res = await User.find(query)
        if (res.length <= 0) {
            await newUser.save();
        } else {
            ctx.status = 500;
            result.update({code: 500, message: '用户名已存在'})
        }
        
    } catch (error) {
        result.update({code: 500, message: error});
    }
    ctx.response.body = result;
    return result;
}

exports.login = async (ctx, next) => {
    const { username , password } = ctx.request.body;
    const result = new Result();
    const query = {
        username: xss(_.trim(username)),
        password: xss(_.trim(password))
    }
    const user = await User.findOne(query)
    if (user) {
        let data = {
            accessToken: $token(user),
            username: user.username
        }
        result.update({ data })
    } else {
        ctx.status = 500;
        result.update({ message: '用户名或密码不正确'});
    }
    ctx.response.body = result;
    return result;
} 

