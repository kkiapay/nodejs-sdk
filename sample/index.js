require('../lib/opts').baseURL = 'https://api-dev.kkiapay.me'
const {transaction} = require("../lib")


transaction({ transactionId:"xxxxxx",apikey:"xxxxxxx"}).
then(response => console.log(response)).
catch(err => console.log(err))



