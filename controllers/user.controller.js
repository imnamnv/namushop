const Account = require('../models/account.model');
const Cart = require('../models/cart.model');
const Product = require('../models/product.model');

const mongoose = require('mongoose');

module.exports.login = (req, res) => {
    if(req.user){
        res.redirect('/user');
    }else{
        res.render('../views/user/login.pug');
    }
}
module.exports.detail = (req, res) => {
    res.render('../views/user/detail.pug', {
        user: req.user
    });
}
module.exports.addInformation =(req,res)=>{
    var idAccount = req.user._id;
    //find and update account
    Account.findOneAndUpdate({"_id": idAccount},{$set:{
        displayName: req.body.name,
        phone: req.body.phone,
        address: req.body.location 
    }},(doc)=>{
        //console.log(doc);
    });
    res.redirect('/user');
}
module.exports.cart =(req,res)=>{
    // res.render('../views/user/cart.pug',{
    //     detailPro: JSON.parse(req.body.detailPro)
    // });
    // Cart.findOne({idUser: req.user._id}, function(err, doc) {
    //     res.render('result:       ' + doc);
    //   });
    Cart.findOneAndUpdate({"idUser": req.user._id,"status":false},{"userName": "Test" }, function(err, doc){ 
        //If the cart(not success) is null
        if(!doc){
            let cart = new Cart({
                idUser: req.user._id,
                userName:req.user.displayName,
                total: req.body.detailPro.price,
                detail: [req.body.detailPro],
                date: Date.now(),
                status: false
            });
            cart.save().then((data) => {
                console.log(data);
            });
        }
        else{
            //if cart(not success) is not null: add product to the detail)
            console.log(doc);
        }
      });
}