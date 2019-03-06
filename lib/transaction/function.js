const validateOptions=(options)=>{

    if(!(options.hasOwnProperty("transactionId")))
    {
        throw Error("transactionId is required");
    }

    if(!(options.hasOwnProperty("privatekey")))
    {
        throw Error("privatekey is required");
    }

    if(!(options.hasOwnProperty("secretkey")))
    {
        throw Error("secretkey is required");
    }

    if(!(options.hasOwnProperty("publickey")))
    {
        throw Error("publickey is required");
    }
}

module.exports = {
    validateOptions
}

