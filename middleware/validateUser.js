const { check } = require('express-validator');

const validateUser =  [
    check('username').isLength({ min: 6, max: 25 }).notEmpty().bail(),
    check('email', 'invalid email').isEmail().notEmpty(),
    check('password', 'invalid password').isLength({ min: 8, max:20 })
];

module.exports = validateUser;