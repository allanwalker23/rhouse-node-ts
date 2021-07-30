"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var MD5HashProvider_1 = __importDefault(require("./MD5Provider/implementations/MD5HashProvider"));
tsyringe_1.container.registerSingleton('HashProvider', MD5HashProvider_1.default);
