import common from './common';

const ChatBot = require('dingtalk-robot-sender')

const baseUrl = 'https://oapi.dingtalk.com/robot/send'
const secret = 'SECce0bf21437fff16964489e54fd4b570857c77602bd9186eea76f566089d0cd29'
const accessToken = '5c8051d1d7c67858f6ae3122462aa615ee4429348ac2581ce868b9abae6d939b'
class Notice {
    constructor() {

    }
    index(params) {
        const robot = new ChatBot({
            baseUrl,
            accessToken,
            secret
        })
        let name = common.getNameById(params.user_id)
        let title = '财务通知'
        let text = `#### 财务通知 \n` +
        `> ${name} 支付 ${params.amount} 元 \n` +
        `> 用途、描述： ${params.desc} \n`+
        `#### ${params.ctime}`
        let at = {
            "isAtAll": false
        };
        robot.markdown(title,text, at);
        return 1


    }
}

let notice = new Notice()
export default notice