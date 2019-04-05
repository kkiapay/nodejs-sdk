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

Request to retrieve transactions

```js
// setup your api key (find one at https://www.kkiapay.me)
const k = kkiapay("<object-contain-api-key>")
k.verify({ privatekey:"xxxxxxx",publickey:"xxxxxxx",secretkey:"xxxxxxx"}).
then((response) => {
    //handle response
}).
catch((error) => {
    //handle error
})
```
