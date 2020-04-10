const webfuse = require('../dist/webfuse')

const chai = require('chai');
const assert = chai.assert;

describe('Provider', function() {

    it('lookup should throw not implemented error', function() {
        const provider = new webfuse.Provider();

        return provider.lookup(1, 'root').then(
            () => Promise.reject(new Error("reject expected")),
            err => {
                assert.instanceOf(err, webfuse.BadState);
                assert.equal(webfuse.BadState.NOT_IMPLEMENTED, err.code);
            }
        );
    });

});