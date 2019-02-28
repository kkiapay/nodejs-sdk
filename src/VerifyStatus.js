import axios from "axios"
const headers = {
    "Content-Type": "application/json",
    "x-api-key": "d28a5ab0219f11e9a96003ad393e52c4"
}



const VerifyStatus = async (status) => {

    try {
        const response = await axios({
            method: "post",
            headers,
            url: "https://api-dev.kkiapay.me/api/v1/transactions/status",
            data: {
                "transactionId": status
            }
        })

        return response.data
    } catch (error) {
        // console.log(error)
        throw Error("Transaction Not Found")
    }
}

export default VerifyStatus