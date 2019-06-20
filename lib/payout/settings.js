const http = require('../http')
const opts = require('../opts')
const { validatePayoutSetupOptions }=require("../function")


module.exports = async function(options){
    const { publickey, privatekey, secretkey, algorithm, send_notification, destination_type, roof_amount } = validatePayoutSetupOptions(options);
    const headers = {
        "Content-Type": "application/json",
        "x-api-key": publickey, 
        "x-private-api-key": privatekey,
        "x-secret-api-key": secretkey  
    };
    return http.post(opts.refundEndpoint,
        {algorithm, send_notification, destination_type, roof_amount},
        {headers})

        .then((response) => {
            return response.data
        }).catch((error) => {
            return error.response.data;
        })

}