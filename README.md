# KKIAPAY-TRANSACTION

 
## Installing

  

Using npm:

  

```bash

$ npm i -s kkiapay/nodejs-sdk

```

  

Using cdn:

  

```html

<script  src="https://unpkg.com/kkiapay/dist/kkiapay.bundle.js"></script>

```


## Example

Request to retrieve transactions in production

```js
// setup your api key (https://www.kkiapay.me)
const k = kkiapay({privatekey:"xxxxxxx",publickey:"xxxxxxx",secretkey:"xxxxxxx"})
k.verify("transactionId").
then((response) => {
    //handle response
}).
catch((error) => {
    //handle error
})
```

Request to retrieve transactions in sandbox

```js
const k = kkiapay({privatekey:"xxxxxxx",publickey:"xxxxxxx",secretkey:"xxxxxxx",sandbox:true})
k.verify("transactionId").
then((response) => {
    //handle response
}).
catch((error) => {
    //handle error
})
```
