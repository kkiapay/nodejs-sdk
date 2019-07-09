const kkiapay=require("../lib")

let k=kkiapay({publickey:"xxxxxxx",privatekey:"xxxxxxxxx",secretkey:"xxxxxxxxx",sandbox:true})

/*k.setup_payout({algorithm : "rate", send_notification : true, destination_type : "MOBILE_MONEY", rate_frequency : "1m", destination : "22997000000" }).
then(e=>console.log(e)).
catch(err=>console.log(err))*/

/*k.setup_payout({algorithm : "rate", send_notification : true, destination_type : "MOBILE_MONEY", rate_frequency : "1m", destination : "22997000000" }).
then(e=>console.log(e)).
catch(err=>console.log(err))*/

k.setup_payout({algorithm : "roof", send_notification : true, destination_type : "MOBILE_MONEY", roof_amount : "1000", destination : "22997000000" }).
then(e=>console.log(e)).
catch(err=>console.log(err))



