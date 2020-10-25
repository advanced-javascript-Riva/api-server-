'use strict';
const supergoose = require('@code-fellows/supergoose');
const server = require('../lib/server');
const testServer = supergoose(server.app);

//Create unit tests for your middleware
//Every route should respond with the right status code and the expected data
//CRUD tests for your collection classes

describe('/GET', () => {
    it('should return all products',() =>  {
        return testServer.get('/products')
        .then(res => {
            expect(res.body).toMatchObject([]);
            expect(res.status).toBe(200);
        })
    });
    it('should return all categories',() =>  {
        return testServer.get('/categories')
        .then(res => {
            expect(res.body).toMatchObject([]);
            expect(res.status).toEqual(200);
        })
    })
    it('should get one category', () => {
        return testServer.get('/categories/3')
        .then(res => {
            expect(res.body).toBe();
            expect(res.status).toEqual(200);
        })
    });
    it('should update get one product', () => {
        return testServer.get('/products/123')
        .then(res => {
            expect(res.body).toBe();
            expect(res.status).toBe(200);
        })
    });
    it('should update delete a product', () => {
        return testServer.get('/products/3')
        .then(res => {
            expect(res.body).toBe(1);
            expect(res.status).toBe(200);
        })
    });
    it('should update delete a category', () => {
        return testServer.get('/categories/2')
        .then(res => {
            expect(res.body).toBe(1);
            expect(res.status).toBe(200);
        })

    });
});

