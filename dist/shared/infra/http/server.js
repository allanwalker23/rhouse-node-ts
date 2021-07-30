"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var https = require('https');
var fs_1 = __importDefault(require("fs"));
var routes_1 = __importDefault(require("./routes"));
var AppError_1 = __importDefault(require("@shared/errors/AppError"));
var path_1 = __importDefault(require("path"));
require("@shared/infra/typeorm");
require("@shared/container");
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(routes_1.default);
app.use(function (err, request, response, _) {
    if (err instanceof AppError_1.default) {
        return response
            .status(err.statusCode)
            .json({ status: 'error', message: err.message });
    }
    console.error(err);
    return response
        .status(500)
        .json({ status: 'error', message: 'Internal server error' });
});
var hostname = 'www.dev.nspace.com.br';
var port = 3333;
var key = fs_1.default.readFileSync(path_1.default.resolve('src/config/key.pem'));
var cert = fs_1.default.readFileSync(path_1.default.resolve('src/config/cert.pem'));
var credentials = {
    key: key,
    cert: cert
};
var server = https.createServer(credentials, app);
server.listen(port, function () {
    console.log('🏠 NSpace server started!');
});
