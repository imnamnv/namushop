const mongoose = require('mongoose');
var Carousel = require('../models/carousel.model');
var Product = require('../models/product.model');

//index page
module.exports.index = (req, res) => {
    res.render('../views/admin/index.pug');
}

//carousel page
module.exports.carousel = (req, res) => {
    Carousel.find().then(function (carousels) {
        console.log(carousels);
        res.render('../views/admin/carousel.pug', {
            carousels: carousels
        });
    });
}

//product page
module.exports.product = (req, res) => {
    res.render('../views/admin/product.pug');
    // Product.find().then(function (products) {
    //     console.log(products);
    //     res.render('../views/admin/product.pug', {
    //         products: products
    //     });
    // });
}

//Upload Carousel
module.exports.uploadImgs1 = (req, res) => {
    var path = [];
    for (var i = 0; i < req.files.length; i++) {
        path.push(req.files[i].path.split('\\').slice(1).join("\\"));
        let carousel = new Carousel({
            name: req.files[i].fieldname,
            path: path[i],
            date: Date.now()
        });
        carousel.save().then((data) => {
            console.log(data);
        });
    }

    res.redirect('/');
}

//Upload products
module.exports.uploadProduct = (req,res)=>{
    console.log(req.body);
    console.log(req.file);

}

