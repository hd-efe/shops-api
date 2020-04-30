"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../data/user");
class Common {
    index() {
        let data = {
            users: user_1.default
        };
        return {
            code: 1,
            data,
            msg: '获取成功'
        };
    }
    getNameById(id) {
        let item = user_1.default.filter(e => e.id = id);
        if (item && item[0]) {
            return item[0].name;
        }
        else {
            return 'xxx';
        }
    }
}
let common = new Common();
exports.default = common;
