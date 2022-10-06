"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const lib_1 = __importDefault(require("../lib"));
const dotenv = require('dotenv');
dotenv.config();
const kkiapay = (0, lib_1.default)({
    privatekey: process.env.PRIVATE_KEY,
    secretkey: process.env.SECRET_KEY,
    publickey: process.env.PUBLIC_KEY,
    sandbox: true
});
(0, globals_1.describe)("verify function", () => {
    (0, globals_1.test)("it should return an object", async () => {
        const res = await kkiapay.verify("1RNX12Q-8");
        const toMatch = ['performed_at', 'received_at', 'type', 'status', 'source',
            'source_common_name', 'amount', 'fees', 'isFeesBorneByMerchant', 'net', 'paymentlink',
            'country', 'reason', 'state', 'partnerId', 'before_balance', 'after_balance', 'is_payout',
            'is_counted', 'wallet', 'sharedTransaction', 'client', 'session', 'transactionId', 'performedAt'];
        for (const item of toMatch) {
            (0, globals_1.expect)(item in res).toBe(true);
        }
    });
    (0, globals_1.test)("invalid transaction id", async () => {
        await (0, globals_1.expect)(kkiapay.verify("xxxxxxxxx"))
            .rejects
            .toThrowError(new Error('Transaction Not Found'));
    });
});
