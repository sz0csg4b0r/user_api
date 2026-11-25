const router = require('express').Router();

router.use('/users', require('./user.routes'));
// bővítés ha új entitást hozunk létre (pl termék, rendelés, etc)

module.exports = router;