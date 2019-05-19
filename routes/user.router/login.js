const express= require('express');
const controller = require('../../controllers/user.controller');
const passport = require('passport');
const router = express.Router();
router.get('/login',passport.authenticate('google',{
    scope:['profile']
}));


module.exports = router;