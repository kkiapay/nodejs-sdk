import { ApiOptions } from './typings';
export default function exec(config: ApiOptions): {
    verify: (transactionId: string) => Promise<any>;
    refund: (transactionId: string) => Promise<any>;
    setup_payout: (transactionId: string) => Promise<any>;
};
