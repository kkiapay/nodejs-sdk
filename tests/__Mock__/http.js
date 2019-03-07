

const http = require('../../lib/http');

let sucess = true

http.interceptors.request.use((config) => {
    return  null;
},() => {

})
http.interceptors.response.use((error) =>{
    return Promise.resolve({data:{}})
} , (error) => {
    return sucess ? Promise.resolve({data:{}}): Promise.reject({})
})

module.exports = (value) => {
    sucess = value
};