const { validateOptions }=require("../lib/function")
 const options = {
    privatekey:"12345",
    publickey:"1234",
    secretkey:"1234",
    transactionId:"123456"
};

function omit (key) {
    let $options = Object.assign({},options);
    delete $options[key]
    return $options
}

describe('Validation of transaction parameters',() => {
    it('must throw exception not object paremeter',() => {

        expect(() => validateOptions(null)).toThrow();
        expect(() => validateOptions('')).toThrow();
    });

    it('must trow exception when publickey is not specify', () => {
        expect(() => 
        validateOptions(omit('publickey'))
        ).toThrow();
    });

    it('must trow exception when privatekey is not specify', () => {
        expect(() => 
        validateOptions(omit('privatekey'))
        ).toThrow();
    });

    it('must trow exception when secretkey is not specify', () => {
        expect(() => 
        validateOptions(omit('secretkey'))
        ).toThrow();
    });

    it('must trow exception when transactionId is not specify', () => {
        expect(() => 
        validateOptions(omit('transactionId'))
        ).toThrow();
    });

    it('must trow exception when transactionId is not specify', () => {
        expect(validateOptions(omit(''))).toMatchObject(options)
    });
})

