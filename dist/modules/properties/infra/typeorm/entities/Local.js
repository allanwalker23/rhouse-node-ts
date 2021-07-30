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
var Usuario_1 = __importDefault(require("@modules/users/infra/typeorm/entities/Usuario"));
var typeorm_1 = require("typeorm");
var BeneficioLocal_1 = __importDefault(require("./BeneficioLocal"));
var Cidade_1 = __importDefault(require("./Cidade"));
var FotoLocal_1 = __importDefault(require("./FotoLocal"));
var TipoCobranca_1 = __importDefault(require("./TipoCobranca"));
var TipoLocal_1 = __importDefault(require("./TipoLocal"));
var Local = /** @class */ (function () {
    function Local() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('increment'),
        __metadata("design:type", Number)
    ], Local.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Local.prototype, "titulo", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Local.prototype, "descricao", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Local.prototype, "limite_pessoa", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Local.prototype, "limite_garagem", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Local.prototype, "preco", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Local.prototype, "espaco_m2", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Local.prototype, "qtd_quarto", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Local.prototype, "qtd_banheiro", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Local.prototype, "cep", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Local.prototype, "bairro", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Local.prototype, "logradouro", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Local.prototype, "complemento", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Local.prototype, "numero", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Local.prototype, "visualizacoes", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Cidade_1.default; }, function (cidade) { return cidade.local; }, { eager: true }),
        typeorm_1.JoinColumn({ name: 'id_cidade' }),
        __metadata("design:type", Cidade_1.default)
    ], Local.prototype, "cidade", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return TipoCobranca_1.default; }, function (tipo_cobranca) { return tipo_cobranca.local; }, { eager: true }),
        typeorm_1.JoinColumn({ name: 'tipo_cobranca_id' }),
        __metadata("design:type", TipoCobranca_1.default)
    ], Local.prototype, "tipo_cobranca", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return FotoLocal_1.default; }, function (foto_local) { return foto_local.local; }, { eager: true }),
        typeorm_1.JoinColumn({ name: 'foto_local_id' }),
        __metadata("design:type", FotoLocal_1.default)
    ], Local.prototype, "foto_local", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return TipoLocal_1.default; }, function (tipo_local) { return tipo_local.local; }, { eager: true }),
        typeorm_1.JoinColumn({ name: 'tipo_local_id' }),
        __metadata("design:type", TipoLocal_1.default)
    ], Local.prototype, "tipo_local", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return BeneficioLocal_1.default; }, function (beneficio_local) { return beneficio_local.local; }),
        __metadata("design:type", BeneficioLocal_1.default)
    ], Local.prototype, "beneficio_local", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Local.prototype, "tipo_local_id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Local.prototype, "id_cidade", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Local.prototype, "tipo_cobranca_id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Local.prototype, "foto_local_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Usuario_1.default; }, function (usuario) { return usuario.local; }, { eager: true }),
        typeorm_1.JoinColumn({ name: 'id_usuario' }),
        __metadata("design:type", Usuario_1.default)
    ], Local.prototype, "usuario", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Local.prototype, "id_usuario", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Local.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Local.prototype, "updated_at", void 0);
    Local = __decorate([
        typeorm_1.Entity('local')
    ], Local);
    return Local;
}());
exports.default = Local;
