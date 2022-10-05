export declare enum ApiKeyType {
    privatekey = "privatekey",
    secretkey = "secretkey",
    publickey = "publickey"
}
export declare type ApiKeyOptions = {
    [key in ApiKeyType]: string | boolean;
};
export declare type ApiOptions = ApiKeyOptions & {
    sandbox: boolean;
};
