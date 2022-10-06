"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("./http");
const opts_1 = __importDefault(require("./opts"));
const verify = async (http, transactionId) => {
    try {
        const res = await http.post(opts_1.default.transactionEndpoint, { transactionId });
        return res.data;
    }
    catch (error) {
        if (error.response.status === 4003) {
            throw new Error(error.response.data.reason);
        }
        else {
            throw new Error('Transaction Not Found');
        }
    }
};
const refund = async (http, transactionId) => {
    try {
        return (await http.post(opts_1.default.revertEndpoint, { transactionId })).data;
    }
    catch (error) {
        throw new Error(error.response.data);
    }
};
const setup_payout = async (http, options) => {
    try {
        return (await http.post(opts_1.default.payoutEndpoint, options)).data;
    }
    catch (error) {
        throw new Error(error.response.data);
    }
};
function exec(config) {
    const http = (0, http_1.api)(config);
    return {
        verify: async (transactionId) => await verify(http, transactionId),
        refund: async (transactionId) => await refund(http, transactionId),
        setup_payout: async (transactionId) => await setup_payout(http, transactionId),
    };
}
exports.default = exec;
