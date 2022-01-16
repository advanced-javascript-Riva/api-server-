const { validationResult } = require('express-validator');

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