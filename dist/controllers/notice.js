"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ChatBot = require('dingtalk-robot-sender');
const baseUrl = 'https://oapi.dingtalk.com/robot/send';
const secret = 'SECce0bf21437fff16964489e54fd4b570857c77602bd9186eea76f566089d0cd29';
const accessToken = '5c8051d1d7c67858f6ae3122462aa615ee4429348ac2581ce868b9abae6d939b';
class Notice {
    constructor() {
    }
    index() {
        const robot = new ChatBot({
            baseUrl,
            accessToken,
            secret
        });
        let title = '乔布斯 20 年前想打造一间苹果咖啡厅，而它正是 Apple Store 的前身';
        let text = `#### 乔布斯 20 年前想打造一间苹果咖啡厅，而它正是 Apple Store 的前身 \n` +
            `> 乔布斯 20 年前想打造的苹果咖啡厅 \n` +
            `Apple Store 的设计正从原来满满的科技感走向生活化，而其生活化的走向其实可以追溯到 20 年前苹果一个建立咖啡馆的计划 \n` +
            `> ![](https://feed.muzli.space/muzli_feed/wp-content/uploads/2020/04/29113424/12UX5hqvrln3B09MgV3YdbA.png) \n` +
            `> ${new Date().getTime()} \n` +
            `##### ${secret}`;
        let at = {
            "isAtAll": false
        };
        robot.markdown(title, text, at);
        return 1;
    }
}
let notice = new Notice();
exports.default = notice;
