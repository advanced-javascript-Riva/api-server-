'use strict';
const express = require('express');
const router = express.Router();
const CategoriesModel = require('../../model/categories/categoriesModel');
const Collections = require('../../model/categories/categoriesCollections');
// const asyncErrorWrapper = require('../../middleware/asyncErrorWrapper');


//create one route file
// Prepend my routes with :collection
// Instead of get/:id, would be get/:collection/:id
//if( collection === 'category')

//Create controller function that defines a function that I can input into each of these.
//pass in models, req.model.read


    const collection = new Collections(CategoriesModel);
// uses the object in the body of the request to create a new “record”
    router.post('/', async (req, res) => {
                // console.log('router.post', JSON.stringify(req.body));
                // const category = new CategoriesModel(req.body);

                try {
                    const result = await collection.create(req.body)
                        res.status(201).json(result);

                } catch (err) {
                    // This will tell us if user gives us bad data!
                    res.status(500).res.json({
                        message: err.message
                    })
                };

            })

        //get all categories
        router.get('/', async (req, res) => {
            console.log('router.get');
            try {
              const result = await collection.read();
              res.json(result)
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
        router.put('/:id', async (req, res) => {
            try {
                //method that updates a document in db
                const result = await collection.update(req.params.id, req.body);
                if (result === null) {
                    //404 means something is not found
                    // if there is no subscriber, immediately leave function
                    return res.status(404).json({
                        message: 'Unable to find a category'
                    })
                }
                res.json(result);
                //after we update the doc we want to save it
            } catch (err) {
                return res.status(500).json({
                    message: err.message
                })
            }
        });



        //deletes the record with the :id specified
        router.delete('/:id',  async (req, res) => {
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
        })

        module.exports = router;