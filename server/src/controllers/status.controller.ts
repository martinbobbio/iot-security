import { ResponseToolkit, ResponseObject } from '@hapi/hapi';
import clc from 'cli-color';
import Status from '../models/Status';

const TelegramBot = require('telegrambot');
const id_chat = process.env.ID_CHAT || '1205774265';
const id_bot =  process.env.ID_BOT || '1145928091:AAGyiTyZenu3mxCPgS2eZBIfrNasELk6O6w';
const api = new TelegramBot(id_bot);

export const createStatus = async (request: any, h: ResponseToolkit): Promise<ResponseObject> => {
    try {
        await Status.destroy({where: {}, truncate: true})
        const { status, text } = request.payload;
        const statusDB = await Status.create({status});

        if(status){
            api.invoke('getUpdates', { offset: 0 }, function (err: any) {
                if (err) throw err;
            });
            api.invoke('sendMessage', { chat_id: id_chat, text }, function (err: any) {
                if (err) throw err;
                console.log(clc.bold.cyan(`The message has been sent: "${text}"`))
            });
        }

        return h.response(statusDB);
    } catch (err) {
        console.log("ERROR: ", err)
        return h.response(err).code(500);
    }
};

export const getStatus = async (_:any, h: ResponseToolkit): Promise<ResponseObject> => {
    try {
        const status = await Status.findAll();
        return h.response(status);
    } catch (err) {
        console.log("ERROR: ", err)
        return h.response(err).code(500);
    }
};