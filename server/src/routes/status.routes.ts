import { Server } from '@hapi/hapi';
import { createStatus, getStatus } from '../controllers/status.controller';

export const routes = (server: Server) => {
    server.route({
        method: 'POST',
        path: '/status',
        handler: createStatus
    });
    server.route({
        method: 'GET',
        path: '/status',
        handler: getStatus
    });
};