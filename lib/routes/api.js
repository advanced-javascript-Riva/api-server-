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

router.post('/:model', paramsToModel, asyncWrapper(async (req, res ) => {
    console.log('starting router.post', req.body);
    const result = await req.model.create(req.body);
    console.log('success router post', result );
    res.json(result);
}));

router.get('/:model/:id',paramsToModel, asyncWrapper(async (req, res, ntext) => {
    const result = await req.model.read(req.params.id);
    res.json(result);
}));

router.put('/:model/:id', paramsToModel, asyncWrapper (async (req, res, next) => {
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