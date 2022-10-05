import { AxiosInstance } from 'axios';
import { ApiOptions } from './typings';
export declare const verify: (http: AxiosInstance, transactionId: string) => Promise<any>;
export declare const refund: (http: AxiosInstance, transactionId: string) => Promise<any>;
export declare const setup_payout: (http: AxiosInstance, options: any) => Promise<any>;
export default function exec(config: ApiOptions): {
    verify: (transactionId: string) => Promise<any>;
    refund: (transactionId: string) => Promise<any>;
    setup_payout: (transactionId: string) => Promise<any>;
};
