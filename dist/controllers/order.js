"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../model/index");
const index_2 = require("../common/index");
class Order {
    add(req) {
        return __awaiter(this, void 0, void 0, function* () {
            let body = req.payload;
            let id = 'order_id_' + index_2.default.uuid(23);
            let user_id = body.user_id;
            let amount = body.amount;
            let desc = body.desc;
            let ctime = new Date();
            let params = {
                id,
                user_id,
                amount,
                desc,
                ctime
            };
            console.log(params);
            let createRs = yield index_1.default.order.create(params);
            if (createRs) {
                return {
                    code: 1,
                    data: createRs,
                    msg: '添加成功'
                };
            }
            else {
                return {
                    code: 0,
                    data: [],
                    msg: '添加失败'
                };
            }
        });
    }
    list(req) {
        return __awaiter(this, void 0, void 0, function* () {
            var pageSize = parseInt(req.params.pageSize) || 1;
            var pageNum = parseInt(req.params.pageNum) || 10;
            console.log(req.params);
            let rs = yield index_1.default.order.findAll({
                attributes: ['id', 'desc', 'amount', 'user_id', 'ctime'],
                order: [
                    // [sequelize.fn('date', sequelize.col('time')), 'desc'],
                    ['ctime', 'desc']
                ],
                limit: pageSize,
                offset: (pageNum - 1) * pageSize
            });
            console.log(rs);
            return {
                code: 1,
                data: rs,
                msg: '查询成功'
            };
        });
    }
}
let order = new Order();
exports.default = order;
