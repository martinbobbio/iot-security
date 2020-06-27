"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../helpers/database");
class Status extends sequelize_1.Model {
}
Status.init({
    id: {
        type: new sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    status: {
        type: new sequelize_1.DataTypes.INTEGER(),
        allowNull: false,
    }
}, {
    timestamps: false,
    tableName: 'status',
    sequelize: database_1.sequelize,
});
exports.default = Status;
