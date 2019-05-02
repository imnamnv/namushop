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
    let product = new Product({
        name: req.body.name,
        path: req.file.path.split('\\').slice(1).join('\\'),
        price: Number(req.body.price),
        detail: req.body.detail,
        count: Number(req.body.count),
        status: true,
        date:  Date.now()
    });
    if(product.count <=0){
        product.status = false;
    }
    product.save().then((data)=>{
        console.log(data);
    });
    res.redirect('/node-admin');

}

