var Carousel = require('../models/carousel.model');
var Product = require('../models/product.model');

//home page
module.exports.index = (req, res) => {
    Carousel.find().then(function (carousels) {
        Product.find().then(function (products) {
            var total = [];
            for (var i = 0; i < (products.length / 5) + 1; i++) {
                var array = [];
                for (var j = 5 * i; j < 5 * (i + 1); j++) {
                    if (products[j] == []) {
                        break;
                    }
                    array.push(products[j]);
                }
                total.push(array);
            }
            //console.log(total);
            res.render('../views/index.pug', {
                carousels: carousels,
                products: total
            });
        });
    });
}

//detail page
module.exports.productDetail = (req, res) => {
    Product.findById(req.params.id)
        .then((detail) => {
            res.render('../views/products/detail',{
                detail: detail
            });
        }).catch((err) => {
            console.log(err);
        });
}