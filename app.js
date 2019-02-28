import VerifyStatus from "./src/VerifyStatus";

VerifyStatus("RUYnpqsSQ1").
then(response => console.log(response)).
catch(err => console.log(err))