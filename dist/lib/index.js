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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setup_payout = exports.refund = exports.verify = void 0;
const http_1 = require("./http");
const opts_1 = __importDefault(require("./opts"));
const verify = (http, transactionId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return (yield http.post(opts_1.default.transactionEndpoint, { transactionId })).data;
    }
    catch (error) {
        if (error.response.status === 4003) {
            throw new Error(error.response.data.reason);
        }
        else {
            throw new Error('Transaction Not Found');
        }
    }
});
exports.verify = verify;
const refund = (http, transactionId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return (yield http.post(opts_1.default.revertEndpoint, { transactionId })).data;
    }
    catch (error) {
        throw new Error(error.response.data);
    }
});
exports.refund = refund;
const setup_payout = (http, options) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return (yield http.post(opts_1.default.payoutEndpoint, options)).data;
    }
    catch (error) {
        throw new Error(error.response.data);
    }
});
exports.setup_payout = setup_payout;
function exec(config) {
    const http = (0, http_1.api)(config);
    return {
        verify: (transactionId) => __awaiter(this, void 0, void 0, function* () { return yield (0, exports.verify)(http, transactionId); }),
        refund: (transactionId) => __awaiter(this, void 0, void 0, function* () { return yield (0, exports.refund)(http, transactionId); }),
        setup_payout: (transactionId) => __awaiter(this, void 0, void 0, function* () { return yield (0, exports.setup_payout)(http, transactionId); }),
    };
}
exports.default = exec;
