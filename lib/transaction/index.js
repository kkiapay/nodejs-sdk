const http = require('../http')
const opts = require('../opts')
const { validateOptions }=require("./function")


module.exports = async function(options){
    //const { transactionId,publickey,privatekey,secretkey } = options
    validateOptions(options);
    const headers = {
        "Content-Type": "application/json",
        "x-api-key": options.privatekey
    };
    return http.post(opts.transactionEndpoint,
        {transactionId: options.transactionId},
        {headers})

        .then((response) => {
            return response.data
        }).catch((error) => {
            throw Error("Transaction Not Found");
        })

}