"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var UsuarioRepository_1 = __importDefault(require("@modules/users/infra/typeorm/repositories/UsuarioRepository"));
require("@modules/users/providers");
var LocalRepository_1 = __importDefault(require("@modules/properties/infra/typeorm/repositories/LocalRepository"));
tsyringe_1.container.registerSingleton('UsersRepository', UsuarioRepository_1.default);
tsyringe_1.container.registerSingleton('LocalRepository', LocalRepository_1.default);
