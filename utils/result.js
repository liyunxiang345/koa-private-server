class Result {
    constructor(code = 200, data = {}, message = 'ok'){
        this.code = code;
        this.data = data;
        this.message = message;
    }
    update({code, data, message}) {
        code && (this.code = code);
        data && (this.data = data);
        message && (this.message = message);
    }
    overdue() {
        this.update({code: 40001, message: '登录已过期'});
    }
}

module.exports = Result