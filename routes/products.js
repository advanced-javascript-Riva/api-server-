'use strict'
const express = require('express');
const ProductsModel = require('../model/productsModel');
const router = express.Router();



// uses the object in the body of the request to create a new “record”

router.post('/', async (req, res) => {
    console.log('router.post', JSON.stringify(req.body));
    const product = new ProductsModel(req.body);

    try {
        const newProduct = await product.save();
        //successfully created an object
        res.status(201).json(newProduct);
    } catch (err) {
        // This will tell us if user gives us bad data!
        res.status(400).json({ message:err.message });

    }

});


//get all categories
router.get('/', async (req, res) => {
    console.log('router.get');
    try {
        const allProducts = await ProductsModel.find();
        res.json(allProducts);
    } catch (err) {
        //This error means I did something wrong!
        //Error on the server, did not have anything to do with user
        res.status(500).res.json( {message: err.message})
    }
});

//get one category using id, this is a param so we can use params
async function getOneProduct (req, res, next) {
    //setting product to undefined
    let product;
    try {
        product = await ProductsModel.findById(req.params.id);
        if(product === null) {
            //404 means something is not found
            // if there is no subscriber, immediately leave function
            return res.status(404).json({ message: 'Unable to find a product' })
        }
    }catch (err){
        return res.status(500).json({ message: err.message})
    }
    // attaching the product to the response object
    res.product = product;
    //successfully completed function so move onto to next piece of middleware or route
    next();
};

router.get('/:id', getOneProduct, async (req, res) => {
    res.json(res.product);
    //this returns the name of the product at the id
    // in Postman I have to pass in the id in the body
});


//uses the object in the body to replace the record with the :id specified
//updating all information using put
router.put('/:id', getOneProduct, async (req, res) => {
    try {
        //method that updates a document in db
        res.product.overwrite(req.body);
        //after we update the doc we want to save it
       await req.product.save();
    } catch (err) {
        return res.status(500).json({ message: err.message})
    }
});



//deletes the record with the :id specified
router.delete('/:id',getOneProduct, async (req, res) => {
    try {
        await res.product.remove();
        res.json({message: "Deleted a Product!"})
    }catch (err){
        res.status(500).json({ message: err.message});
    }
})


module.exports = router;