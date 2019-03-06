# KKIAPAY-TRANSACTION

 
## Installing

  

Using npm:

  

```bash

$ npm i -s kkiapay

```

  

Using cdn:

  

```html

<script  src="https://unpkg.com/kkiapay/dist/kkiapay.bundle.js"></script>

```


## Example

Request to retrieve transactions

```js
kkiapay.transaction({ transactionId:"xxxxxx",apikey:"xxxxxxx"}).
then((response) => {
    //handle response
}).
catch((error) => {
    //handle error
})
```