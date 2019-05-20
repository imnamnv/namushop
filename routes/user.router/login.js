const express= require('express');
const controller = require('../../controllers/user.controller');
const passport = require('passport');
const router = express.Router();
router.get('/login/google',passport.authenticate('google',{
    scope:['profile']
}));
router.get('/login',controller.login);
router.get('/detail',passport.authenticate('google'),controller.detail);



module.exports = router;