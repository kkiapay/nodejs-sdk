const validateOptions=(options)=>{


    if(typeof options !="object" || options === null)
    {
        throw new Error("parameter must be a object");
    }

    if(!(options.hasOwnProperty("transactionId")))
    {
        throw new Error("transactionId is required");
    }

    if(!(options.hasOwnProperty("privatekey")))
    {
        throw new Error("privatekey is required");
    }

    if(!(options.hasOwnProperty("secretkey")))
    {
        throw new Error("secretkey is required");
    }

    if(!(options.hasOwnProperty("publickey")))
    {
        throw Error("publickey is required");
    }

    return options
}


module.exports = {
    validateOptions,
}

