const axios = require('axios');
const opts = require('./opts')

const http = axios.create({
    baseURL: opts.baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
})

module.exports = http