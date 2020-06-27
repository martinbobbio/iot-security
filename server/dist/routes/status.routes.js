"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const status_controller_1 = require("../controllers/status.controller");
exports.routes = (server) => {
    server.route({
        method: 'POST',
        path: '/status',
        handler: status_controller_1.createStatus
    });
    server.route({
        method: 'GET',
        path: '/status',
        handler: status_controller_1.getStatus
    });
};
