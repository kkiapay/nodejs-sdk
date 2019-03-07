# KKIAPAY NODEJS-SDK

 
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

Request to retrieve transactions

```js
kkiapay.transaction({ transactionId:"xxxxxx",privatekey:"xxxxxxx",publickey:"xxxxxxx",secretkey:"xxxxxxx"}).
then((response) => {
    //handle response
}).
catch((error) => {
    //handle error
})
```