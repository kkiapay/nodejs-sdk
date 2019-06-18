require ("babel-polyfill");
const refund = require('../lib/refund');

const changeStatus = require('./__Mock__/http')

describe("transaction verify test",() => {

    it("must be resturn data when response success", (done) => {
        changeStatus(true);
        refund({ transactionId:"RUYnpqsSQ1",publickey:process.env.publickey})
        .then((data) => {
            expect(data).toMatchObject({})
            done()
        })
    })

    it("must be resturn data when response fail", (done) => {
        changeStatus(false);
        refund({ transactionId:"RUYnpqsSQ1",publickey:process.env.publickey})
        .then((data) => {
            done(new Error('can not never success'))
        })
        .catch((error) => {
            expect(error)
        })
        .finally(() => done())
    })
})
