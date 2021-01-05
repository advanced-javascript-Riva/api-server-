'use strict';

const supergoose = require('@code-fellows/supergoose');
const server = require('../lib/server');
const testServer = supergoose(server.app);

describe('Testing the app', () => {
    it('should return some products',() =>  {
        return testServer.get('/products')
        .then(res => {
            expect(res.body).toMatchObject([]);
            expect(res.status).toBe(200);
        })
    })
});
