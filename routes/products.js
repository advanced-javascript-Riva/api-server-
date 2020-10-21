'use strict'
const express = require('express');
const router = require('./categories');





// uses the object in the body of the request to create a new “record”
router.post('/', (req, res) => {

})


//get all categories
router.get('/', (req, res) => {
    res.send([1, 2, 3]);

})

//get one category using id, this is a param so we can use params
router.get('/:id', (req, res) => {
    res.send(req.params.id);
})


//uses the object in the body to replace the record with the :id specified
//updating all information using put
router.put('/:id', (req, res) => {

})



//deletes the record with the :id specified
router.delete('/:id', (req, res) => {

})


module.exports = router;