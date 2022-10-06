import { api } from './http';
import { AxiosInstance } from 'axios';
import opts from './opts';
import { ApiOptions } from './typings';

const verify = async (http: AxiosInstance, transactionId: string) => {
  try {
    const res = await http.post(opts.transactionEndpoint, { transactionId });
    return res.data;
  } catch (error: any) {
    if (error.response.status === 4003) {
      throw new Error(error.response.data.reason);
    } else {
      throw new Error('Transaction Not Found');
    }
  }
};

const refund = async (http: AxiosInstance, transactionId: string) => {
  try {
    return (await http.post(opts.revertEndpoint, { transactionId })).data;
  } catch (error: any) {
    throw new Error(error.response.data);
  }
};

const setup_payout = async (http: AxiosInstance, options: any) => {
  try {
    return (await http.post(opts.payoutEndpoint, options)).data;
  } catch (error: any) {
    throw new Error(error.response.data);
  }
};

export default function exec(config: ApiOptions) {
  const http = api(config);
  return {
    verify: async (transactionId: string) => await verify(http, transactionId),
    refund: async (transactionId: string) => await refund(http, transactionId),
    setup_payout: async (transactionId: string) => await setup_payout(http, transactionId),
  };
}
