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

const validatePayoutSetupOptions=(options)=>{


    if(typeof options !="object" || options === null)
    {
        throw new Error("parameter must be a object");
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

    if(!(options.hasOwnProperty("algorithm")))
    {
        throw new Error("algorithm is required");
    }

    if(!(options.hasOwnProperty("send_notification")))
    {
        throw new Error("send_notification is required");
    }

    if(!(options.hasOwnProperty("destination_type")))
    {
        throw new Error("destination_type is required");
    }

    if(!(options.hasOwnProperty("roof_amount")))
    {
        throw new Error("roof_amount is required");
    }

    return options
}


module.exports = {
    validateOptions,
    validatePayoutSetupOptions
}

