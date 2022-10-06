import { kkiapayApis } from './opts';
import { ApiOptions } from './typings';
import axios from 'axios';

export const api = (options: ApiOptions) => {
  return axios.create({
    baseURL: options.sandbox ? kkiapayApis.sandbox : kkiapayApis.live,
    headers: {
      'x-api-key': options.publickey,
      'x-secret-key': options.secretkey,
      'x-private-key': options.privatekey,
    },
  });
};
