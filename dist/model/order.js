"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(sequelize, DataTypes) {
    var order = sequelize.define("order", {
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        desc: DataTypes.STRING,
        amount: DataTypes.STRING,
        user_id: DataTypes.INTEGER,
        ctime: DataTypes.DATE
    }, {
        freezeTableName: true,
        timestamps: false
    });
    return order;
}
exports.default = default_1;
