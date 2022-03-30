const User = require('../models/User');
const _ = require('lodash');
const xss = require('xss');

exports.getUserList = async (ctx, next) => {
    const data = await User.find()
    console.log('data', data)
    const result = {
        code: 200,
        data,
        message: 'ok'
    }
    ctx.response.body = result
    return result
}

exports.registerUser = async (ctx, next) => {
    const { username, password } = ctx.request.body;
    const newUser = new User({
        username: xss(_.trim(username)),
        password: xss(_.trim(password))
    })
    console.log(newUser);
    let data = await newUser.save();
    console.log('/baocun')
    console.log(data)
    const result = {
        code: 200,
        data: {},
        message: 'ok'
    }
    ctx.response.body = result;
    return result;
}

