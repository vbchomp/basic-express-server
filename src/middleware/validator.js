'use strict'

module.exports = (req, res, next) => {
    if(!req.query.name) { next(500) }
    next();
}