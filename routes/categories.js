'use strict';
const express = require('express');
const router = express.Router();

// uses the object in the body of the request to create a new “record”
router.post('/categories', (req, res) => {

})


//getting all categories
router.get('/categories', (req, res) => {
res.send('getting categories');

})

//get one category using id, this is a param so we can use params
router.get('/categories/:id', (req, res) => {
    const categories = [1, 2, 3, 4];
    const category = category.find(item => item.id === parseInt(req.params.id));
    if(!category) return res.status(404).send('This category was not found');
    // if we do have a course with id, return it to client
    res.send(category);
});



//uses the object in the body to replace the record with the :id specified
//updating all information using put
router.put('/categories/:id', (req, res) => {

})

//deletes the record with the :id specifiedr
router.delete('/categories/:id', (req, res) => {

})
module.exports = router;