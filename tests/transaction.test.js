require ("babel-polyfill");
const transaction = require('../lib/transaction');

const changeStatus = require('./__Mock__/http')

describe("transaction verify test",() => {

    it("must be resturn data when response success", (done) => {
        changeStatus(true);
        transaction({ transactionId:"RUYnpqsSQ1",privatekey:process.env.privatekey,publickey:process.env.publickey,secretkey:process.env.secretkey})
        .then((data) => {
            expect(data).toMatchObject({})
            done()
        })
    })

    it("must be resturn data when response fail", (done) => {
        changeStatus(false);
        transaction({ transactionId:"RUYnpqsSQ1",privatekey:process.env.privatekey,publickey:process.env.publickey,secretkey:process.env.secretkey})
        .then((data) => {
            done(new Error('can not never success'))
        })
        .catch((error) => {
            expect(error.message).toBe("Transaction Not Found")
        })
        .finally(() => done())
    })
})
