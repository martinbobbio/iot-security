"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var statusSchema = new mongoose_1.Schema({
    status: {
        type: Boolean,
        required: true,
    },
}, {
    timestamps: true
});
exports.default = mongoose_1.model('status', statusSchema);
