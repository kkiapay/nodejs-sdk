const validateOptions=(options)=>{

    if(!(options.hasOwnProperty("transactionId")))
    {
        throw Error("transactionId is required");
    }

    if(!(options.hasOwnProperty("apikey")))
    {
        throw Error("apikey is required");
    }
    return true
}

module.exports = {
    validateOptions
}

