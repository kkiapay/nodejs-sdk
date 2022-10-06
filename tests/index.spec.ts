import { describe, expect, test } from '@jest/globals';
import exec from '../lib';

const dotenv = require('dotenv')
dotenv.config()

const kkiapay = exec({
  privatekey: process.env.PRIVATE_KEY as string,
  secretkey: process.env.SECRET_KEY as string,
  publickey: process.env.PUBLIC_KEY as string,
  sandbox: true
})

describe("verify function", () => {
  test("it should return an object", async () => {
    const res = await kkiapay.verify("1RNX12Q-8")
    const toMatch = ['performed_at', 'received_at', 'type', 'status', 'source',
    'source_common_name', 'amount', 'fees', 'isFeesBorneByMerchant', 'net', 'paymentlink',
    'country', 'reason', 'state', 'partnerId', 'before_balance', 'after_balance', 'is_payout',
    'is_counted', 'wallet', 'sharedTransaction', 'client', 'session', 'transactionId', 'performedAt']

    for(const item of toMatch) {
      expect(item in res).toBe(true)
    }
  });

  test("invalid transaction id", async () => {
      await expect(kkiapay.verify("xxxxxxxxx"))
      .rejects
      .toThrowError(new Error('Transaction Not Found'))
  });

})