"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const cli_color_1 = __importDefault(require("cli-color"));
const mongo_url = process.env.MONGO_URL || 'mongodb://localhost/tp_iot';
mongoose_1.default
    .connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(cli_color_1.default.bold.cyan('Database is connected on', mongo_url)))
    .catch(err => console.log(cli_color_1.default.bold.red(err)));
