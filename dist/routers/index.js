"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../controllers/index");
console.log(index_1.default);
const routers = [
    {
        path: '/',
        method: 'GET',
        handler: index_1.default.order.add
    },
    {
        path: '/add',
        method: 'GET',
        handler: (request, h) => {
            return h.response('pppppppppp').code(200);
        }
    }
];
exports.default = routers;
//# sourceMappingURL=index.js.map