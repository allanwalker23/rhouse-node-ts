"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
require("@modules/users/providers");
var FakeStorageProvider_1 = __importDefault(require("./StorageProvider/fakes/FakeStorageProvider"));
tsyringe_1.container.registerSingleton('StorageProvider', FakeStorageProvider_1.default);
