"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../config/db");
const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
const Op = Sequelize.Op;
let db = { order: null };
const sequelize = new Sequelize(db_1.default.database, db_1.default.username, db_1.default.password, {
    host: db_1.default.host,
    dialect: 'mysql',
    operatorAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: '+08:00' //东八时区
});
// fs.readdirSync(__dirname).filter((file) => {
// 	return (file.indexOf('.') !== 0) && (file != 'index.js');
// }).forEach((file) => {
// 	var model: any = sequelize.import(path.join(__dirname, file));
// 	console.log(model)
// 	db[model.name] = { ins: model}
// })
db.order = sequelize.import(path.join(__dirname, 'order.js'));
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Op = Op;
exports.default = db;
