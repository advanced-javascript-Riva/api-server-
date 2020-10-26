'use strict';
const supergoose = require('@code-fellows/supergoose');
const server = require('../lib/server');
const testServer = supergoose(server.app);
const ProductsCollection = require('../model/products/productsCollections');
const CategoriesCollection = require('../model/categories/categoriesCollections');
//Create unit tests for your middleware
//Every route should respond with the right status code and the expected data
//CRUD tests for your collection classes


let productsCollection;
const createProduct = async () => {
    const createdProduct = await productsCollection.create(product);
    product.id = createdProduct.id;

}
//before test runs, I have to add item to the DB
let product = {

    category: 'Dry Goods',
    name: 'Fruits',
    display_name: 'Moroccan Dates',
    description: 'Morrican dates sold per lb'
}


let categoryCollection;
const createCategory = async () => {
    const createdCategory = await categoryCollection.create(category);
    category.id = createdCategory.id;

}
let category = {

    name: 'Cereal',
    display_name: 'Lucky Charms',
    description: 'Located in Isle 5'
}

describe('/GET', () => {
    beforeAll(async () => {
        productsCollection = new ProductsCollection();
        categoryCollection = new CategoriesCollection();
        await createProduct();
        await createCategory();
    })
    beforeEach(() => {

    })
    it('should return all products', async () => {
        await testServer.get('/products')
            .then(res => {
                expect(res.body.length).toEqual(1);
                expect(res.body[0].name).toEqual(product.name);
                expect(res.status).toBe(200);
            })
    });
    it('should return all categories', async () => {
        await testServer.get('/categories')
            .then(res => {
                expect(res.body.length).toEqual(1);
                expect(res.body[0].name).toEqual(category.name);
                expect(res.status).toBe(200);
            })
    })
    it('should get one category', async () => {
        await testServer.get('/categories/' + category.id)
            .then(res => {
                expect(res.body.name).toBe(category.name);
                expect(res.status).toEqual(200);
            })
    });
    it('should get one product', async () => {
        console.log('requesting product with id', product.id);
        await testServer.get('/products/' + product.id)
            .then(res => {
                console.log('got response body', res.body);
                expect(res.body.name).toBe(product.name);
                expect(res.status).toBe(200);
            })
    });
});

describe('/PUT', () => {
    beforeAll(async () => {
        // supergoose.startDB();
        productsCollection = new ProductsCollection();
        categoryCollection = new CategoriesCollection();
        await createProduct();
        await createCategory();
    })
    beforeEach(() => {

    })

    it('should update a product', async () => {
        await testServer.put('/products/' + product.id).send({
                category: 'Canned Goods'
            })
            .then(res => {
                //express returns a null response as an empty object
                expect(res.body.category).toBe('Canned Goods');
                expect(res.status).toBe(200);
            })
    });
    it('should update category', async () => {
        await testServer.put('/categories/' + category.id).send({
                name: 'Boo Berry'
            })
            .then(res => {
                expect(res.body.name).toBe('Boo Berry');
                expect(res.status).toBe(200);
            })

    });

    describe('/DELETE', () => {
        beforeAll(async () => {
            // supergoose.startDB();
            productsCollection = new ProductsCollection();
            categoryCollection = new CategoriesCollection();
            await createProduct();
            await createCategory();
        })
        beforeEach(() => {

        })

        it('should delete a product', async () => {
            await testServer.delete('/products/' + product.id)
                .then(res => {
                    //express returns a null response as an empty object
                    expect(res.body).toEqual('');
                    expect(res.status).toBe(202);
                })
        });
        it('should delete a category', async () => {
            await testServer.delete('/categories/' + category.id)
                .then(res => {
                    expect(res.body).toEqual('');
                    expect(res.status).toBe(202);
                })

        });
    });
});