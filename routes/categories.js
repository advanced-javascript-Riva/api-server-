'use strict';
const express = require('express');
const router = express.Router();

TODO:
//create one route file
// Prepend my routes with :collection
// Instead of get/:id, would be get/:collection/:id
//if( collection === 'category')

//Create controller function that defines a function that I can input into each of these.


// uses the object in the body of the request to create a new “record”
router.post('/', async (req, res) => {
    console.log('router.post', JSON.stringify(req.body));
    const category = new CategoriesModel(req.body);

    try {
        const newCategory = await category.save();
        //successfully created an object
        res.status(201).json(newCategory);
    } catch (err) {
        // This will tell us if user gives us bad data!
        res.status(400).json({
            message: err.message
        });

    }

});


//get all categories
router.get('/', async (req, res) => {
    console.log('router.get');
    try {
        const allCategories = await CategoriesModel.find();
        res.json(allCategories);
    } catch (err) {
        //This error means I did something wrong!
        //Error on the server, did not have anything to do with user
        res.status(500).res.json({
            message: err.message
        })
    }
});

//get one category using id, this is a param so we can use params
async function getOneCategory(req, res, next) {
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

router.get('/:id', getOneCategory, async (req, res) => {
    res.json(res.category);
    //this returns the name of the product at the id
    // in Postman I have to pass in the id in the body
});


//uses the object in the body to replace the record with the :id specified
//updating all information using put
router.put('/:id', getOneCategory, async (req, res) => {
    try {
        //method that updates a document in db
        res.category.overwrite(req.body);
        //after we update the doc we want to save it
        await req.category.save();
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
});



//deletes the record with the :id specified
router.delete('/:id', getOneCategory, async (req, res) => {
    try {
        await res.category.remove();
        res.json({
            message: "Deleted a category!"
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
})

module.exports = router;