export const kkiapayApis = {
  sandbox: 'https://api-sandbox.kkiapay.me',
  live: 'https://api.kkiapay.me',
};

export default {
  transactionEndpoint: '/api/v1/transactions/status',
  revertEndpoint: '/api/v1/transactions/revert',
  payoutEndpoint: '/merchant/payouts/schedule',
};
