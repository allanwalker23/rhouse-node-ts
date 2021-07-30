"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var users_routes_1 = __importDefault(require("@modules/users/infra/http/routes/users.routes"));
var local_routes_1 = __importDefault(require("@modules/properties/infra/http/routes/local.routes"));
var noticias_routes_1 = __importDefault(require("@modules/news/infra/http/routes/noticias.routes"));
var sessions_routes_1 = __importDefault(require("@modules/users/infra/http/routes/sessions.routes"));
var routes = express_1.Router();
routes.use('/usuarios', users_routes_1.default);
routes.use('/locais', local_routes_1.default);
routes.use('/noticias', noticias_routes_1.default);
routes.use('/sessions', sessions_routes_1.default);
exports.default = routes;
