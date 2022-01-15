const { check } = require('express-validator');

const validateUser =  [
    check('username').isLength({ min: 6, max: 25 }).notEmpty(),
    check('email', 'invalid email').isEmail(),
    check('password', 'invalid password').isLength({ min: 6 })
];

module.exports = validateUser;