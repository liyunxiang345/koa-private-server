const jswt = require('jsonwebtoken');
const secret = 'yunxiang.lee';
module.exports = userinfo => {
    const { username, _id } = userinfo;
    const token = jswt.sign({ user: username,id: _id }, secret, {expiresIn: '12h'})
    return token
}
