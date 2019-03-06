const axios = require('axios');
const opts = require('./opts')

const http = axios.create({
    baseURL: opts.baseURL
})

module.exports = http