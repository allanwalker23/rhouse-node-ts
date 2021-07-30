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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var UsuarioRepository_1 = __importDefault(require("@modules/users/infra/typeorm/repositories/UsuarioRepository"));
var BecomeLocatarioService_1 = __importDefault(require("@modules/users/services/BecomeLocatarioService"));
var CreateUserService_1 = __importDefault(require("@modules/users/services/CreateUserService"));
var GetUserInfoLoged_1 = __importDefault(require("@modules/users/services/GetUserInfoLoged"));
var express_1 = require("express");
var tsyringe_1 = require("tsyringe");
var usersRouter = express_1.Router();
usersRouter.get('/', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var usersRepository, allUsers;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                usersRepository = new UsuarioRepository_1.default();
                return [4 /*yield*/, usersRepository.find()];
            case 1:
                allUsers = _a.sent();
                return [2 /*return*/, response.json(allUsers)];
        }
    });
}); });
usersRouter.get('/findUser/:id', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, getInfoService, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = request.params.id;
                getInfoService = tsyringe_1.container.resolve(GetUserInfoLoged_1.default);
                return [4 /*yield*/, getInfoService.execute({ id_usuario: id })];
            case 1:
                user = _a.sent();
                return [2 /*return*/, response.json(user)];
        }
    });
}); });
usersRouter.post('/', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, nome_completo, nome_usuario, email, senha, telefone, usersService, cliente;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = request.body, nome_completo = _a.nome_completo, nome_usuario = _a.nome_usuario, email = _a.email, senha = _a.senha, telefone = _a.telefone;
                usersService = tsyringe_1.container.resolve(CreateUserService_1.default);
                return [4 /*yield*/, usersService.execute({
                        email: email,
                        nome_completo: nome_completo,
                        nome_usuario: nome_usuario,
                        senha: senha,
                        telefone: telefone
                    })];
            case 1:
                cliente = _b.sent();
                response.json(cliente);
                return [2 /*return*/];
        }
    });
}); });
usersRouter.post('/becomeLocatario/:id', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, becomeLocatarioService, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = request.params.id;
                becomeLocatarioService = tsyringe_1.container.resolve(BecomeLocatarioService_1.default);
                return [4 /*yield*/, becomeLocatarioService.execute({
                        id_usuario: id
                    })];
            case 1:
                user = _a.sent();
                return [2 /*return*/, response.json(user)];
        }
    });
}); });
exports.default = usersRouter;
