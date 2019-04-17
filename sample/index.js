const kkiapay=require("../lib")


let k=kkiapay({ publickey:"process.env.publickey",privatekey:"process.env.privatekey",secretkey:"process.env.secretkey"})

k.verify("AN5uUl574Z").
then(e=>console.log(e)).
catch(err=>console.log(err))



