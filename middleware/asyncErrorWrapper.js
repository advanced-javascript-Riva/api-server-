'use strict'


/*
this function takes a fn as arg that acts as a request handler
and wraps it wth a call of catch
- any error that happens inside inside the function will be called and passed
to first error handler middleware in controller
- function currying
- any async function will be caught (in express);
*/
module.exports = (fn) => {
    return (req, res, next) => {
        return Promise.resolve(fn(req, res, next)).catch(next);
    };
};