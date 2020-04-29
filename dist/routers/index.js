"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = require("../controllers/order");
const notice_1 = require("../controllers/notice");
console.log(order_1.default);
const routers = [
    {
        path: '/',
        method: 'GET',
        handler: (request, h) => {
            return h.response('pppppppppp').code(200);
        }
    },
    {
        path: '/notice',
        method: 'GET',
        handler: notice_1.default.index
    },
    {
        path: '/order/add',
        method: 'post',
        handler: order_1.default.add
    },
    {
        path: '/order/list/{pageNum}/{pageSize}',
        method: 'get',
        handler: order_1.default.list
    }
];
exports.default = routers;
