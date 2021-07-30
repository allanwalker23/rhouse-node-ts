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
var Usuario_1 = __importDefault(require("@modules/users/infra/typeorm/entities/Usuario"));
var UUID = require('uuid-int');
var FakeUserRepository = /** @class */ (function () {
    function FakeUserRepository() {
        this.users = [];
    }
    FakeUserRepository.prototype.find = function () {
        return __awaiter(this, void 0, void 0, function () {
            var findUsers;
            return __generator(this, function (_a) {
                findUsers = this.users;
                return [2 /*return*/, findUsers];
            });
        });
    };
    FakeUserRepository.prototype.findById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var findUser;
            return __generator(this, function (_a) {
                findUser = this.users.find(function (user) { return user.id === id; });
                return [2 /*return*/, findUser];
            });
        });
    };
    FakeUserRepository.prototype.create = function (_a) {
        var nome_completo = _a.nome_completo, email = _a.email, nome_usuario = _a.nome_usuario, senha = _a.senha, telefone = _a.telefone;
        return __awaiter(this, void 0, void 0, function () {
            var user, id, generator, uuid;
            return __generator(this, function (_b) {
                user = new Usuario_1.default();
                id = 0;
                generator = UUID(id);
                uuid = generator.uuid();
                user.id = uuid;
                user.nome_completo = nome_completo;
                user.nome_usuario = nome_usuario;
                user.email = email;
                user.senha = senha;
                user.telefone = telefone;
                user.tipo_usuario = 0;
                this.users.push(user);
                return [2 /*return*/, user];
            });
        });
    };
    FakeUserRepository.prototype.findByEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var findUser;
            return __generator(this, function (_a) {
                findUser = this.users.find(function (user) { return user.email === email; });
                return [2 /*return*/, findUser];
            });
        });
    };
    FakeUserRepository.prototype.findByNomeUsuario = function (nome_usuario) {
        return __awaiter(this, void 0, void 0, function () {
            var findUser;
            return __generator(this, function (_a) {
                findUser = this.users.find(function (user) { return user.nome_usuario === nome_usuario; });
                return [2 /*return*/, findUser];
            });
        });
    };
    FakeUserRepository.prototype.findByTelefone = function (telefone) {
        return __awaiter(this, void 0, void 0, function () {
            var findUser;
            return __generator(this, function (_a) {
                findUser = this.users.find(function (user) { return user.telefone === telefone; });
                return [2 /*return*/, findUser];
            });
        });
    };
    FakeUserRepository.prototype.findOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var findUser;
            return __generator(this, function (_a) {
                findUser = this.users.find(function (user) { return user.id === id; });
                return [2 /*return*/, findUser];
            });
        });
    };
    FakeUserRepository.prototype.comparePassword = function (senha, passwordCrypt) {
        return __awaiter(this, void 0, void 0, function () {
            var findUser;
            return __generator(this, function (_a) {
                findUser = this.users.find(function (user) { return senha === passwordCrypt; });
                return [2 /*return*/, findUser];
            });
        });
    };
    FakeUserRepository.prototype.save = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var findIndex;
            return __generator(this, function (_a) {
                findIndex = this.users.findIndex(function (findUser) { return findUser.id === user.id; });
                this.users[findIndex] = user;
                return [2 /*return*/, user];
            });
        });
    };
    return FakeUserRepository;
}());
exports.default = FakeUserRepository;
