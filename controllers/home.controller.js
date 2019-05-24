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
            //console.log(total[0]);
            res.render('../views/index.pug', {
                carousels: carousels,
                user:req.user,
                products: total[0]
            });
        });
    });
}

//detail product
module.exports.productDetail = (req, res) => {
    Product.findById(req.params.id)
        .then((detail) => {
            res.render('../views/products/detail.pug', {
                detail: detail,
                user:req.user
            });
        }).catch((err) => {
            console.log(err);
        });
}

//list product
module.exports.listPro = (req, res) => {
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
        res.render('../views/products/list-product.pug', {
            products: total
        });
    });
}