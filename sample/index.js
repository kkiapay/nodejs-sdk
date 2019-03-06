const kkiapay=require("../index")


kkiapay.transaction({ transactionId:"xxxxxx",apikey:"xxxxxxx"}).
then(response => console.log(response)).
catch(err => console.log(err))

