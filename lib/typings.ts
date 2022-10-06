export enum ApiKeyType {
  privatekey = 'privatekey',
  secretkey = 'secretkey',
  publickey = 'publickey',
}

export type ApiKeyOptions = {
  [key in ApiKeyType]: string | boolean;
};

export type ApiOptions = ApiKeyOptions & {
  sandbox: boolean;
};
