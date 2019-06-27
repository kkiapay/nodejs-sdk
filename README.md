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

```js
// setup your api key (https://www.kkiapay.me)
//initialize kkiapay in production environnment
const k = kkiapay({privatekey:"xxxxxxx",publickey:"xxxxxxx",secretkey:"xxxxxxx"})
//initialize kkiapay in sandbox environnment
// Request to retrieve transactions
const k = kkiapay({privatekey:"xxxxxxx",publickey:"xxxxxxx",secretkey:"xxxxxxx",sandbox:true})
k.verify("transactionId").
then((response) => {
    //handle response
}).
catch((error) => {
    //handle error
})
```
