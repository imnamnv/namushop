const express= require('express');
const controller = require('../../controllers/user.controller');
const passport = require('passport');
const router = express.Router();

//check login
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

//call callbackfuncionURL
router.get('/detail',passport.authenticate('google'),(req,res)=>{
    res.redirect('/user');
});
router.get('/',authCheck,controller.detail);
router.post('/',authCheck,controller.addInformation);
router.post('/cart',authCheck,controller.postCart);
router.get('/cart',authCheck,controller.cart);
router.delete('/cart/:id',authCheck,controller.deleteItem);
router.post('/cart/pay',authCheck,controller.pay);
router.get('/cart/:id',authCheck,controller.infor);





module.exports = router;