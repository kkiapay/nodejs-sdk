import VerifyStatus from "./src/VerifyStatus";

VerifyStatus("xDNoswash1").
then(response => console.log(response)).
catch(err => console.log(err))