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
var Beneficio_1 = __importDefault(require("./Beneficio"));
var Local_1 = __importDefault(require("./Local"));
var BeneficioLocal = /** @class */ (function () {
    function BeneficioLocal() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('increment'),
        __metadata("design:type", String)
    ], BeneficioLocal.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Local_1.default; }, function (local) { return local.beneficio_local; }, { eager: true }),
        typeorm_1.JoinColumn({ name: 'id_local' }),
        __metadata("design:type", Local_1.default)
    ], BeneficioLocal.prototype, "local", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Beneficio_1.default; }, function (beneficio) { return beneficio.beneficio_local; }, { eager: true }),
        typeorm_1.JoinColumn({ name: 'id_beneficio' }),
        __metadata("design:type", Beneficio_1.default)
    ], BeneficioLocal.prototype, "beneficio", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], BeneficioLocal.prototype, "id_local", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], BeneficioLocal.prototype, "id_beneficio", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], BeneficioLocal.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], BeneficioLocal.prototype, "updated_at", void 0);
    BeneficioLocal = __decorate([
        typeorm_1.Entity('beneficio_local')
    ], BeneficioLocal);
    return BeneficioLocal;
}());
exports.default = BeneficioLocal;
