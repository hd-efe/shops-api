"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(sequelize, DataTypes) {
    var order = sequelize.define("order", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: DataTypes.STRING,
        type: DataTypes.STRING,
        tel: DataTypes.STRING,
        number: DataTypes.STRING,
        province: DataTypes.STRING,
        city: DataTypes.STRING,
        county: DataTypes.STRING,
        areaCode: DataTypes.STRING,
        addressDetail: DataTypes.STRING,
        postalCode: DataTypes.STRING,
        handled: DataTypes.INTEGER,
        ctime: DataTypes.DATE,
        uptime: DataTypes.DATE
    }, {
        freezeTableName: true,
        timestamps: false
    });
    return order;
}
exports.default = default_1;
