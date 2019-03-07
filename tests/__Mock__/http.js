

const http = require('../../lib/http');

let sucess = true

http.interceptors.request.use((config) => {
    config.baseURL = 'http://test.test';
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