import orderController from '../controllers/order';
import noticeController from '../controllers/notice';
import commonController from '../controllers/common'
console.log(orderController)
const routers = [
    {
        path: '/',
        method: 'GET',
        handler: commonController.index
    },
    {
        path: '/notice',
        method: 'GET',
        handler: noticeController.index
    },
    {
        path: '/order/add',
        method: 'post',
        handler: orderController.add
    },
    {
        path: '/order/list/{pageNum}/{pageSize}',
        method: 'get',
        handler: orderController.list
    }
]
export default routers;