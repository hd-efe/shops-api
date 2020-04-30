import User from '../data/user'
class Common {
    index() {
        let data = {
            users: User
        }
        return {
            code: 1,
            data,
            msg: '获取成功'
        }
    }

}
let common = new Common()
export default common;