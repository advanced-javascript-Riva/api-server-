'use strict';

const supergoose = require('@code-fellows/supergoose');

/*
- Create unit tests for your middleware
- Route tests for our server
- Every route should respond with the right status code and the expected data
- CRUD tests for your collection classes
- Use the supergoose testing library
*/

const server = require('../lib/server');
const supergoose = require('@code-fellows/supergoose');
const testServer = supergoose(server.app);

describe('Testing the app', () => {
    it('should reuturn some products',() =>  {
        return testServer.get('/products')
        .then(res => {
            expect(res.body).toBe([]);
        })
    })
});