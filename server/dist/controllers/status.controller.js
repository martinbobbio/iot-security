"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatus = exports.createStatus = void 0;
const cli_color_1 = __importDefault(require("cli-color"));
const Status_1 = __importDefault(require("../models/Status"));
const TelegramBot = require('telegrambot');
const id_chat = process.env.ID_CHAT || '1205774265';
const id_bot = process.env.ID_BOT || '1145928091:AAGyiTyZenu3mxCPgS2eZBIfrNasELk6O6w';
const api = new TelegramBot(id_bot);
exports.createStatus = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Status_1.default.destroy({ where: {}, truncate: true });
        const { status, text } = request.payload;
        const statusDB = yield Status_1.default.create({ status });
        if (status) {
            api.invoke('getUpdates', { offset: 0 }, function (err) {
                if (err)
                    throw err;
            });
            api.invoke('sendMessage', { chat_id: id_chat, text }, function (err) {
                if (err)
                    throw err;
                console.log(cli_color_1.default.bold.cyan(`The message has been sent: "${text}"`));
            });
        }
        return h.response(statusDB);
    }
    catch (err) {
        console.log("ERROR: ", err);
        return h.response(err).code(500);
    }
});
exports.getStatus = (_, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const status = yield Status_1.default.findAll();
        return h.response(status);
    }
    catch (err) {
        console.log("ERROR: ", err);
        return h.response(err).code(500);
    }
});
