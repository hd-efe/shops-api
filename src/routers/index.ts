import controllers from '../controllers/index';
console.log(controllers)
const routers = [
    {
        path: '/',
        method: 'GET',
        handler: controllers.order.add
    },
    {
        path: '/add',
        method: 'GET',
        handler: (request, h) => {
            return h.response('pppppppppp').code(200);
        }
    }
]
export default routers;