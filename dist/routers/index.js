"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = require("../controllers/order");
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
