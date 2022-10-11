const http = require("../http");
const opts = require("../opts");
const { validateOptions } = require("../function");

module.exports = function (config) {
  validateOptions(config);
  http.defaults.headers.common["x-api-key"] = config.publickey;
  http.defaults.headers.common["x-secret-key"] = config.secretkey;
  http.defaults.headers.common["x-private-key"] = config.privatekey;
  http.defaults.baseURL = config.sandbox
    ? "https://api-sandbox.kkiapay.me"
    : "https://api.kkiapay.me";

  return features;
};

const features = {
  verify: async (transactionId) => {
    return http
      .post(opts.transactionEndpoint, { transactionId })

      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        if (error.response.status === 4003) {
          throw new Error(error.response.data.reason);
        } else {
          throw new Error("Transaction Not Found");
        }
      });
  },

  refund: async (transactionId) => {
    return http
      .post(opts.revertEndpoint, { transactionId })

      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
  },

  setup_payout: async (options) => {
    return http
      .post(opts.payoutEndpoint, options)

      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
  },
};
