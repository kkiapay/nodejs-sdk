const kkiapay=require("../lib")


let k=kkiapay({publickey:"f774e960812811e99cf7e73f32bcec42",privatekey:"process.env.privatekey",secretkey:"process.env.secretkey",sandbox:true})

k.verify("O_S9_rdlX").
then(e=>console.log(e)).
catch(err=>console.log(err))



