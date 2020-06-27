import { Server } from '@hapi/hapi';
import { routes } from './routes/status.routes';
import clc from 'cli-color';

export const init = async () => {
    const server: Server = new Server({
        port: process.env.PORT || 8080,
        host: process.env.HOST || 'localhost'
    });
    await server.register({
        plugin: require('laabr'),
        options: {},
    });
    routes(server);
    await server.start();
    console.log(clc.bold.cyan('Server running on', server.info.uri))
};