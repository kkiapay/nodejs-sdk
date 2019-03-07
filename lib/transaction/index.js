const http = require('../http')
const opts = require('../opts')
const { validateOptions }=require("../function")


module.exports = async function(options){
    const { transactionId,publickey,privatekey,secretkey } = validateOptions(options);
    const headers = {
        "Content-Type": "application/json",
        "x-api-key": publickey // todo doit être change après que la police de contrôle soit activé
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