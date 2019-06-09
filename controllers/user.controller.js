const Account = require('../models/account.model');
const Cart = require('../models/cart.model');
const Product = require('../models/product.model');

const mongoose = require('mongoose');

module.exports.login = (req, res) => {
    if (req.user) {
        res.redirect('/user');
    } else {
        res.render('../views/user/login.pug');
    }
}
module.exports.detail = (req, res) => {
    res.render('../views/user/detail.pug', {
        user: req.user
    });
}

//update account
module.exports.addInformation = (req, res) => {
    var idAccount = req.user._id;
    //find and update account
    Account.findOneAndUpdate({ "_id": idAccount }, {
        $set: {
            displayName: req.body.name,
            phone: req.body.phone,
            address: req.body.location
        }
    }, (doc) => {
        //console.log(doc);
    });
    res.redirect('/user');
}

//add item to cart
module.exports.postCart = (req, res) => {
    // /var elementPro = JSON.parse(req.body.detailPro);
    var elementPro = JSON.parse(req.body.proAdd);
    //res.send(elementPro);

    Cart.findOne(({ "idUser": req.user._id, "status": false }), (err, data) => {
        //if cart(not success) is not null: create cart)
        if (!data) {
            console.log('create cart');
            let cart = new Cart({
                idUser: req.user._id,
                userName: req.user.displayName,
                total: elementPro.price,
                detail: [elementPro],
                date: Date.now(),
                status: false
            });
            //save to database
            cart.save().then((data) => {
                res.send(elementPro);
            });
        }
        //if cart(not success) is not null: add product to the detail)
        else {
            //find old total
            var total = data.total;
            data.detail.unshift(elementPro);
            total += elementPro.price;
            Cart.findOneAndUpdate({ "idUser": req.user._id, "status": false }, { "detail": data.detail, "total": total }, function (err, doc) {
                res.send(elementPro);
            });
        }
    });
}

module.exports.cart = (req, res) => {
    Cart.findOne(({ "idUser": req.user._id, "status": false }), (err, data) => {
        res.render('../views/user/cart.pug', {
            user: req.user,
            cart: data
        });
    })
}

//delete item in cart
module.exports.deleteItem = (req, res) => {
    var idItem = req.params.id;
    Cart.findOne(({ "idUser": req.user._id, "status": false }), (err, data) => {
        data.detail = data.detail.filter((e) => e._id != idItem);
        Cart.findOneAndUpdate({ "idUser": req.user._id, "status": false }, { "detail": data.detail }, function (err, doc) {

        });
        res.send(data);

    })
}

//pay
module.exports.pay = (req, res) => {
    var idCart = req.body.idCart;
    Cart.findOneAndUpdate({ "_id": idCart }, { "status": true }, function (err, data) {
        res.send(data);
    });
}

//infor cart
module.exports.infor = (req, res) => {
    var id = req.params.id;
    Cart.findOne({ "_id": id }, function (err, data) {
        res.send(data);
    });
}
