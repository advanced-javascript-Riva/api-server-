'use strict';
const express = require('express');
const router = express.Router();
const CategoriesModel = require('../../model/categories/categoriesModel');
const Collections = require('../../model/categories/categoriesCollections');

const asyncWrapper = require('../../middleware/asyncErrorWrapper');



//Attempted to use errorWrapper (to handle all errors in routes. Tested on this page only)
const collection = new Collections(Collections);
// uses the object in the body of the request to create a new “record”
router.post('/',  asyncWrapper(  (req, res, ) => {
    // console.log('router.post', JSON.stringify(req.body));
    // const category = new CategoriesModel(req.body);
    const result = collection.save(req.body)
    res.status(201).json(result);

}));


//get all categories
router.get('/categories', asyncWrapper (async (req, res) => {
        const result = await collection.read();
        res.json(result)
        res.status(500).res.json({
            message: err.message
        })
}));


//get one category using id, this is a param so we can use params
async function getOneCategory(req, res, ) {
    //setting product to undefined
    let category;
    try {
        category = await CategoriesModel.findById(req.params.id);
        if (category === null) {
            //404 means something is not found
            // if there is no subscriber, immediately leave function
            return res.status(404).json({
                message: 'Unable to find a category'
            })
        }
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
    // attaching the product to the response object
    res.category = category;
    //successfully completed function so move onto to next piece of middleware or route
    next();
};


router.get('/:id', getOneCategory, asyncWrapper(async (req, res) => {
    res.json(res.category);
    //this returns the name of the product at the id
    // in Postman I have to pass in the id in the body
}));



//uses the object in the body to replace the record with the :id specified
//updating all information using put
router.put('/:id', asyncWrapper (async (req, res) => {
       //method that updates a document in db
        const result = await collection.update(req.params.id, req.body);
        if (result === null) {
            //404 means something is not found
            // if there is no subscriber, immediately leave function
            return res.status(404).json({
                message: 'Unable to find a category'
            })
        }
        return res.json(result);
        //after we update the doc we want to save it
}));



//deletes the record with the :id specified
router.delete('/:id', asyncWrapper (async(req, res) => {
    try {
        await collection.delete(req.params.id);
        res.json({
            message: "Deleted a category!"
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}));

module.exports = router;