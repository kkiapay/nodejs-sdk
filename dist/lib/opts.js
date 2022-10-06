"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kkiapayApis = void 0;
exports.kkiapayApis = {
    sandbox: 'https://api-sandbox.kkiapay.me',
    live: 'https://api.kkiapay.me',
};
exports.default = {
    transactionEndpoint: '/api/v1/transactions/status',
    revertEndpoint: '/api/v1/transactions/revert',
    payoutEndpoint: '/merchant/payouts/schedule',
};
