'use strict';
const express = require('express');
const router = express.Router();
const paramsToModel = require('../../middleware/paramsToModel');
const asyncWrapper = require('../../middleware/asyncErrorWrapper');

router.post('/:model', paramsToModel, asyncWrapper(async (req, res ) => {
    const result = await req.model.create(req.body);
    res.json(result);

}));

router.get('/:model/:id',paramsToModel, asyncWrapper(async (req, res) => {
    const result = await req.model.read(req.params.id);
    res.json(result);
}));

router.put('/:model/:id', paramsToModel, asyncWrapper (async (req, res) => {
    const result = await req.model.update(req.params.id, req.body);
       //method that updates a document in db
    res.status(200).json(result);
}));

router.delete('/:model/:id', paramsToModel, asyncWrapper (async(req, res) => {
    const result = await req.model.delete(req.params.id);
    res.status(202).json(result);
}));

router.get('/:model', paramsToModel, asyncWrapper (async (req, res) => {
    const result = await req.model.readAll();
    res.status(200).json(result);
}));

module.exports = router;