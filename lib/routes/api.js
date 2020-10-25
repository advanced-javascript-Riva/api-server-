'use strict';
const express = require('express');
const router = express.Router();
const paramsToModel = require('../../middleware/paramsToModel');
const Collection = require('../../model/mongo');
const asyncWrapper = require('../../middleware/asyncErrorWrapper');
const Collections = require('../../model/mongo');

//Attempted to use errorWrapper (to handle all errors in routes. Tested on this page only)

// uses the object in the body of the request to create a new “record”
router.post('/:model', paramsToModel, asyncWrapper(async (req, res, next ) => {
    res.send('post');

}));

router.get('/:model/:id',paramsToModel, asyncWrapper(async (req, res, next) => {
    res.send('get one ' + req.model + ' with id ' + req.params.id);
    //this returns the name of the product at the id
    // in Postman I have to pass in the id in the body
}));



//uses the object in the body to replace the record with the :id specified
//updating all information using put
router.put('/:model/:id', paramsToModel, asyncWrapper (async (req, res, next) => {
       //method that updates a document in db
    res.send('updateOne');
}));



//deletes the record with the :id specified`
router.delete('/:model/:id', paramsToModel, asyncWrapper (async(req, res, next) => {
    res.send('delete');
}));

//get all categories
router.get('/:model', paramsToModel, asyncWrapper (async (req, res, next) => {
    const collection = new Collections(req.model);
    const result = await collection.read();
    res.status(200).json(result);
}));

module.exports = router;