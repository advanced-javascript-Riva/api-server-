'use strict';
const express = require('express');
const router = express.Router();
const paramsToModel = require('../../middleware/paramsToModel');
const asyncWrapper = require('../../middleware/asyncErrorWrapper');
const user = require('../../model/user/userSchema');
const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = process.env.CLIENT_ID;
const google = require('googleapis').google;
const jwt = require('jsonwebtoken');

router.post('/:model', paramsToModel, asyncWrapper(async (req, res) => {
    const result = await req.model.create(req.body);
    res.json(result);
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

// Authenticate user
router.post('/user/sign-in', asyncWrapper (async (req, res) => {
  const client = new OAuth2Client(CLIENT_ID);
  const verify = async () => {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID
    });
    const payload = ticket.getPayload();
    const userId = payload['sub'];
    // reference user model here
    const result = await user.findOne({"name": payload['name']});
    if (result === null) {
      return user.create({
        name: payload['name'],
        id: userId
      });
    } else {
    return res.status(200).json(result);
    }
  }
  verify().catch(console.error);
}));

module.exports = router;