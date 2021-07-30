"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var CreateLocalService = /** @class */ (function () {
    function CreateLocalService(localRepository) {
        this.localRepository = localRepository;
    }
    CreateLocalService.prototype.execute = function (_a) {
        var bairro = _a.bairro, cep = _a.cep, complemento = _a.complemento, descricao = _a.descricao, numero = _a.numero, limite_garagem = _a.limite_garagem, qtd_banheiro = _a.qtd_banheiro, qtd_quarto = _a.qtd_quarto, titulo = _a.titulo, espaco_m2 = _a.espaco_m2, foto_local_id = _a.foto_local_id, id_cidade = _a.id_cidade, id_usuario = _a.id_usuario, limite_pessoa = _a.limite_pessoa, logradouro = _a.logradouro, preco = _a.preco, tipo_cobranca_id = _a.tipo_cobranca_id, tipo_local_id = _a.tipo_local_id, visualizacoes = _a.visualizacoes;
        return __awaiter(this, void 0, void 0, function () {
            var local;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.localRepository.create({
                            bairro: bairro, tipo_local_id: tipo_local_id, tipo_cobranca_id: tipo_cobranca_id, preco: preco, logradouro: logradouro, limite_pessoa: limite_pessoa,
                            cep: cep, limite_garagem: limite_garagem, id_usuario: id_usuario, id_cidade: id_cidade, foto_local_id: foto_local_id, espaco_m2: espaco_m2, qtd_banheiro: qtd_banheiro,
                            descricao: descricao, qtd_quarto: qtd_quarto, titulo: titulo, numero: numero, complemento: complemento,
                            visualizacoes: 0
                        })];
                    case 1:
                        local = _b.sent();
                        return [2 /*return*/, local];
                }
            });
        });
    };
    CreateLocalService = __decorate([
        tsyringe_1.injectable(),
        __param(0, tsyringe_1.inject('LocalRepository')),
        __metadata("design:paramtypes", [Object])
    ], CreateLocalService);
    return CreateLocalService;
}());
exports.default = CreateLocalService;
