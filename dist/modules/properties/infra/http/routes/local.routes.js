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
var express_1 = require("express");
var typeorm_1 = require("typeorm");
var LocalRepository_1 = __importDefault(require("@modules/properties/infra/typeorm/repositories/LocalRepository"));
var uuidv4_1 = require("uuidv4");
var localRouter = express_1.Router();
localRouter.get('/filter', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var repository, _a, bairro, _b, tipo_propriedade_id, _c, cidade_id, valor_min, valor_max, qtd_quarto, qtd_banheiro, _d, page, findAll;
    return __generator(this, function (_e) {
        repository = typeorm_1.getCustomRepository(LocalRepository_1.default);
        _a = request.query, bairro = _a.bairro, _b = _a.tipo_propriedade_id, tipo_propriedade_id = _b === void 0 ? 1 : _b, _c = _a.cidade_id, cidade_id = _c === void 0 ? 1 : _c, valor_min = _a.valor_min, valor_max = _a.valor_max, qtd_quarto = _a.qtd_quarto, qtd_banheiro = _a.qtd_banheiro, _d = _a.page, page = _d === void 0 ? 0 : _d;
        if (valor_max === undefined && valor_min === undefined && qtd_quarto === undefined && qtd_banheiro === undefined) {
            if (bairro === undefined) {
                //findAll = await repository.find({loadEagerRelations:false,where:{cidade_id:cidade_id,tipo_propriedade_id:tipo_propriedade_id},take:2,skip:(Number(page)*2)})
            }
            else {
                // findAll = await repository.find({loadEagerRelations:false,where:{cidade_id:cidade_id,tipo_propriedade_id:tipo_propriedade_id},take:2,skip:(Number(page)*2)})
            }
        }
        else {
            //   findAll = await repository.find({loadEagerRelations:false,where:{cidade_id,qtd_banheiro,qtd_quarto,bairro}});
        }
        return [2 /*return*/, response.json(findAll)];
    });
}); });
localRouter.get('/recents', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var repository;
    return __generator(this, function (_a) {
        repository = typeorm_1.getCustomRepository(LocalRepository_1.default);
        // const all = await repository.find({order:{created_at:"DESC"}});
        return [2 /*return*/, response.json('ok')];
    });
}); });
localRouter.get('/', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var repository, all;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                repository = typeorm_1.getCustomRepository(LocalRepository_1.default);
                return [4 /*yield*/, repository.find()];
            case 1:
                all = _a.sent();
                console.log(Number(uuidv4_1.uuid()));
                return [2 /*return*/, response.json(all)];
        }
    });
}); });
localRouter.post('/', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var repository, _a, bairro, cep, cidade_id, locador_id, complemento, descricao, id, numero, preco_mensal, qtd_banheiro, qtd_quarto, rua, titulo, url_foto;
    return __generator(this, function (_b) {
        repository = typeorm_1.getCustomRepository(LocalRepository_1.default);
        _a = request.body, bairro = _a.bairro, cep = _a.cep, cidade_id = _a.cidade_id, locador_id = _a.locador_id, complemento = _a.complemento, descricao = _a.descricao, id = _a.id, numero = _a.numero, preco_mensal = _a.preco_mensal, qtd_banheiro = _a.qtd_banheiro, qtd_quarto = _a.qtd_quarto, rua = _a.rua, titulo = _a.titulo, url_foto = _a.url_foto;
        return [2 /*return*/];
    });
}); });
localRouter.post('/', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/];
    });
}); });
exports.default = localRouter;
