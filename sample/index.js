const kkiapay=require("../lib")


let k=kkiapay({ publickey:"42051160403a11e98f723752f967fed2",privatekey:"hjk",secretkey:"gvhjb"})

k.verify("JkgWE6DO2C").
then(e=>console.log(e)).
catch(err=>console.log(err))

// kkiapay.transaction({ transactionId:"JkgWE6DO2C",privatekey:"",publickey:"42051160403a11e98f723752f967fed2",secretkey:""}).
// then(response => console.log(response)).
// catch(err => console.log(err))

