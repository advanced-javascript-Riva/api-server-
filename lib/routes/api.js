'use strict';
const express = require('express');
const router = express.Router();
const paramsToModel = require('../../middleware/paramsToModel');
const asyncWrapper = require('../../middleware/asyncErrorWrapper');


//Attempted to use errorWrapper (to handle all errors in routes. Tested on this page only)

// uses the object in the body of the request to create a new “record”
router.post('/:model', paramsToModel, asyncWrapper(async (req, res ) => {
    const result = await req.model.create(req.body);
    res.json(result);

}));

router.get('/:model/:id',paramsToModel, asyncWrapper(async (req, res) => {
    const result = await req.model.read(req.params.id);
    res.json(result);
    //this returns the name of the product at the id
    // in Postman I have to pass in the id in the body
}));


//uses the object in the body to replace the record with the :id specified
//updating all information using put
router.put('/:model/:id', paramsToModel, asyncWrapper (async (req, res) => {
    const result = await req.model.update(req.params.id, req.body);
       //method that updates a document in db
    res.json(result);
}));


//deletes the record with the :id specified`
router.delete('/:model/:id', paramsToModel, asyncWrapper (async(req, res) => {
    const result = await req.model.delete(req.params.id);
    res.status(202).json(result);
}));

//get all categories
router.get('/:model', paramsToModel, asyncWrapper (async (req, res) => {
    const result = await req.model.readAll();
    res.status(200).json(result);
}));

module.exports = router;