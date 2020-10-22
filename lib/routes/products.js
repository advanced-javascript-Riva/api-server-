'use strict'
const express = require('express');
const ProductsModel = require('../../model/products/productsModel');
const router = express.Router();
const ProductsCollection = require('../../model/products/productsCollections');


const products = new ProductsCollection(ProductsCollection)
// uses the object in the body of the request to create a new “record”
router.post('/', async (req, res) => {
    // console.log('router.post', JSON.stringify(req.body));
    // const product = new ProductsModel(req.body);

    try {
        const result = await products.save();
        //successfully created an object
        res.status(201).json(result);
    } catch (err) {
        // This will tell us if user gives us bad data!
        res.status(400).json({
            message: err.message
        });
    }
});


//get all products
router.get('/', async (req, res) => {
    try {
        const allProducts = await products.read();
        res.json(allProducts);
    } catch (err) {
        //This error means I did something wrong!
        //Error on the server, did not have anything to do with user
        res.status(500).res.json({
            message: err.message
        })
    }
});

//get one product using id, this is a param so we can use params
async function getOneProduct(req, res, next) {
    //setting product to undefined
    let products;
    try {
        products = await ProductsModel.findById(req.params.id);
        if (products === null) {
            //404 means something is not found
            // if there is no subscriber, immediately leave function
            return res.status(404).json({
                message: 'Unable to find a product'
            })
        }
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
    // attaching the product to the response object
    res.products = products;
    //successfully completed function so move onto to next piece of middleware or route
    next();
};

router.get('/:id', getOneProduct, async (req, res) => {
    res.json(res.products);
    //this returns the name of the product at the id
    // in Postman I have to pass in the id in the body
});


//uses the object in the body to replace the record with the :id specified
//updating all information using put
router.put('/:id', async (req, res) => {
    try {
        //method that updates a document in db
        const result = await products.update(req.params.id, req.body);
        if (result === null) {
            return res.status(500).json({
                message: err.message
            })
        }
        //after we update the doc we want to save it
        res.json(result);
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
});



//deletes the record with the :id specified
router.delete('/:id', async (req, res) => {
    try {
        await products.delete();
        res.json({
            message: "Deleted a Product!"
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
})


module.exports = router;