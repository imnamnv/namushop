const express= require('express');
const controller = require('../../controllers/user.controller');
const passport = require('passport');
const router = express.Router();

const authCheck = (req,res,next)=>{
    if(!req.user){
        res.redirect('/user/login');
    }else{
        next();
    }
}

router.get('/login',controller.login);

router.get('/login/google',passport.authenticate('google',{
    scope:['profile']
}));

router.get('/detail',passport.authenticate('google'),(req,res)=>{
    res.redirect('/user');
});
router.get('/',authCheck,controller.detail);
router.post('/',authCheck,controller.addInformation);
router.post('/cart',authCheck,controller.cart);


module.exports = router;