const kkiapay=require("../lib")

let k=kkiapay({publickey:"e4e6e19080ab11e99cf7e73f32bcec42",privatekey:"tpk_e4e708a080ab11e99cf7e73f32bcec42",secretkey:"tsk_e4e708a180ab11e99cf7e73f32bcec42"})

k.payout_configuration("roof", true, "MOBILE_MONEY","1000","22967724710","1m").
then(e=>console.log(e)).
catch(err=>console.log(err))



