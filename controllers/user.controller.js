const Account = require('../models/account.model');
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