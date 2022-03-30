const mongoose = require('mongoose');

// 账户用户模型
const UserSchema = new mongoose.Schema({
    username:String,
    password:String
})

const User = mongoose.model('User', UserSchema);

module.exports = User;
