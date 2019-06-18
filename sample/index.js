require('dotenv').config()
const kkiapay=require("../index")

kkiapay.transaction({ transactionId:"XawtfA_pX",privatekey:process.env.privatekey,publickey:process.env.publickey,secretkey:process.env.secretkey}).
then(response => console.log(response)).
catch(err => console.log(err))
