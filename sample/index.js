require('../lib/opts').baseURL = 'https://api-dev.kkiapay.me'
const {transaction} = require("../lib")


transaction({ transactionId:"xDNoswash1",apikey:"c27fbe803bb211e9b9cc57122c11a69f"}).
then(response => console.log(response)).
catch(err => console.log(err))



