"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const opts_1 = require("./opts");
const axios_1 = __importDefault(require("axios"));
const api = (options) => {
    return axios_1.default.create({
        baseURL: options.sandbox ? opts_1.kkiapayApis.sandbox : opts_1.kkiapayApis.live,
        headers: {
            'x-api-key': options.publickey,
            'x-secret-key': options.secretkey,
            'x-private-key': options.privatekey,
        },
    });
};
exports.api = api;
