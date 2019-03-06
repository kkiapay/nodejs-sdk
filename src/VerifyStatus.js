import axios from "axios"
const headers = {
    "Content-Type": "application/json",
    "x-api-key": "c27fbe803bb211e9b9cc57122c11a69f"
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