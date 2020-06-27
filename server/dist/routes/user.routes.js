"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var user_controller_1 = require("../controllers/user.controller");
exports.routes = function (server) {
    server.route({
        method: 'POST',
        path: '/users',
        handler: user_controller_1.createUser
    });
    server.route({
        method: 'GET',
        path: '/users',
        handler: user_controller_1.getUsers
    });
    server.route({
        method: 'GET',
        path: '/users/{id}',
        handler: user_controller_1.getUser
    });
    server.route({
        method: 'PUT',
        path: '/users/{id}',
        handler: user_controller_1.updateUser
    });
    server.route({
        method: 'DELETE',
        path: '/users/{id}',
        handler: user_controller_1.deleteUser
    });
};
