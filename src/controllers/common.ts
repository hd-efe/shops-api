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
    getNameById(id) {
        let item = User.filter(e => e.id = id)
        if(item && item[0]) {
            return item[0].name
        }else {
            return 'xxx'
        }
    }

}
let common = new Common()
export default common;