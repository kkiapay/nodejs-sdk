# KKIAPAY NODEJS-SDK
https://travis-ci.org/kkiapay/nodejs-sdk.svg?branch=master


 
## Installing

  

Using npm:

  

```bash

$ npm i -s kkiapay/nodejs-sdk

```


## Request to retrieve transactions 

#### EXAMPLE

```js
kkiapay.transaction({ transactionId:"xxxxxx",privatekey:"xxxxxxx",publickey:"xxxxxxx",secretkey:"xxxxxxx"}).
then((response) => {
    //handle response
}).
catch((error) => {
    //handle error
})
```

## Request to revert transaction 

#### EXAMPLE

```js
kkiapay.refund({ transactionId:"xxxxxx",privatekey:"xxxxxxx",publickey:"xxxxxxx",secretkey:"xxxxxxx"}).
then((response) => {
    //handle response
}).
catch((error) => {
    //handle error
})
```

## COMPLETE  POSSIBLE STATUS LIST

| STATUS      | DESCRIPTION             |
| ----------- | ----------------------- |
|  SUCCESS    |        Successful transaction                 |
| FAILED      |         Transaction failed                |
| INSUFFICIENT_FUND    | Not enough money in developper  account              |
| TRANSACTION_NOT_ELIGIBLE | This transaction  are already reverted or are not eligible                    |
| TRANSACTION_NOT_FOUND |  Transaction not found |
| INVALID_TRANSACTION | You are not owner of this transaction  |
| INVALID_TRANSACTION_TYPE | We can't revert this transaction  |
