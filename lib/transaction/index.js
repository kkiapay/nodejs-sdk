const http = require('../http')
const opts = require('../opts')
const { validateOptions }=require("../function")


module.exports = async function(options){
    const { transactionId,publickey,privatekey,secretkey } = validateOptions(options);
    const headers = {
        "Content-Type": "application/json",
        "x-api-key": publickey, 
        "x-private-api-key": privatekey,
        "x-secret-api-key": secretkey 
    };
    return http.post(opts.transactionEndpoint,
        {transactionId},
        {headers})

        .then((response) => {
            return response.data
        }).catch((error) => {
            throw new Error("Transaction Not Found");
        })

}