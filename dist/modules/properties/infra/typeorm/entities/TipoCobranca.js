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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Local_1 = __importDefault(require("./Local"));
var TipoCobranca = /** @class */ (function () {
    function TipoCobranca() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('increment'),
        __metadata("design:type", String)
    ], TipoCobranca.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], TipoCobranca.prototype, "nome", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Local_1.default; }, function (local) { return local.tipo_cobranca; }),
        __metadata("design:type", Local_1.default)
    ], TipoCobranca.prototype, "local", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], TipoCobranca.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], TipoCobranca.prototype, "updated_at", void 0);
    TipoCobranca = __decorate([
        typeorm_1.Entity('tipo_cobranca')
    ], TipoCobranca);
    return TipoCobranca;
}());
exports.default = TipoCobranca;
