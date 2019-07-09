# KKIAPAY NODEJS-SDK

## Installing

  

Using npm:
```bash
    $ npm i -s kkiapay/nodejs-sdk
```

## Initialization

#### Production
```js
// setup your api key (https://www.kkiapay.me)
//initialize kkiapay in production environnment
const k = kkiapay({privatekey:"xxxxxxx",publickey:"xxxxxxx",secretkey:"xxxxxxx"})
```

#### Sandbox
```js
//initialize kkiapay in sandbox environnment
const k = kkiapay({privatekey:"xxxxxxx",publickey:"xxxxxxx",secretkey:"xxxxxxx",sandbox:true})
```

  

## Request to retrieve transactions 

#### EXAMPLE
```js
// Request to retrieve transactions
k.verify("transactionId").
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
// Request to retrieve transactions
k.refund("transactionId").
then((response) => {
    //handle response
}).
catch((error) => {
    //handle error
})
```

## Request to schedule payout 

#### EXAMPLE

```js
// Example to schedule payout when amount reaches a ceiling
k.setup_payout({algorithm : "roof", send_notification : true, destination_type : "MOBILE_MONEY", roof_amount : "1000", destination : "22997000000" }).
then((response) => {
    //handle response
}).
catch((error) => {
    //handle error
})

// Example to schedule payout by frequency
k.setup_payout({algorithm : "rate", send_notification : true, destination_type : "MOBILE_MONEY", rate_frequency : "1m", destination : "22997000000" }).
then((response) => {
    //handle response
}).
catch((error) => {
    //handle error
})
```

| PARAMETERS      | DESCRIPTION             |
| ----------- | ----------------------- |
| algorithm    | (String)   "roof" if the amount reaches a ceiling or "rate" for refund by frequency. |
| send_nofitication      | (Boolean) to receive a notification after payment.                   |
| destination_type    | (String) "BANK_ACCOUNT" or "MOBILE_MONEY"              |
| destination |  (String) the bank number or phone number of the receiver of the refund |
| rate_frequency | (String) "1m", "1w", "3j" Refund frequency when choosing "rate" algorithm  |
| roof_amount | (String) Refund amount when choosing "roof" algorithm  |


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
| INVALID_PAYOUT_DESTINATION_ACCOUNT | Provided destination account is not valid mobile money account |
