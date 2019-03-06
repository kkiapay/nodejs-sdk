const kkiapay=require("../index")


kkiapay.transaction({ transactionId:"RUYnpqsSQ1",apikey:process.env.apikey}).
then(response => console.log(response)).
catch(err => console.log(err))

