'use strict';
const express = require('express');
const router = express.Router();
const paramsToModel = require('../../middleware/paramsToModel');
const asyncWrapper = require('../../middleware/asyncErrorWrapper');
// const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = process.env.CLIENT_ID;
// const google = require('googleapis').google;
// const jwt = require('jsonwebtoken');
const { body, validationResult} = require('express-validator');

router.post('/:model', paramsToModel, asyncWrapper(async (req, res) => {
    const result = await req.model.create(req.body);
    res.json(result);
}));

router.post(
  '/:model/user',
  paramsToModel,

  body('username').isLength({ min: 6, max: 25 }),
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),

  asyncWrapper (async (req, res) => {
    const errors = validationResult(req);
    if(!errorsisEmpty()) {
      return res.status(400).json({ errors: errors.array()});
    }

    let { username, password, email } = req.body;
    let user = await req.model.findOne({
      username
    });
    if (user) {
      return res.status(400).send('User already exists');
    }

    const newUser = await req.model.create({
      username,
      password,
      email
    });
    await req.model.save(newUser);
    res.json(newUser);
}));

router.get('/:model/search/:term', paramsToModel,asyncWrapper (async(req, res) => {
  const searchResult = await req.model.readAll({
    // query into readAll for mongos Find.
    // $or returns results that match any query in arr vs and which matches all
    $or:[
      // queries title field using search as regex expression
      {title: {$regex:req.params.term,$options:'i'}},
      {description: {$regex:req.params.term,$options:'i'}}
    ]
  });
  res.json(searchResult);
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
    const result = await req.model.readAll(req.query);
    res.status(200).json(result);
}));

module.exports = router;