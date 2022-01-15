const { validationResult } = require('express-validator');

// Error that occurred before function passed as arg to middleware in loop:
// Express validator calls next for me
// The loop was running through all the validators
// Next expects the validators to be consecutive
// but because of the loop, I am acually looping over three different middlewares
// In my route, instead of having 3 middlewares in a row, where next() would work as
// expected, this file is the middleware.
// What this means is that this next, is the next middleware for the route, and the next
// middleware wouldbe asyncWrapper

// There are three middlewares to run
// I can't call next in the loop because that skips to the asyncWrapper before all middlewares
// have executed
const validate = async (req, res, next) => {
  if (!req.validators) {
    next();
  }
  for (let middleware of req.validators) {
    await middleware(req, res, () => {});
  }
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log('errors found sending json')
    res.status(400).json({ errors: errors.array()})
  } else {
    next();
  }
}

module.exports = validate;