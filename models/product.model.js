const mongoose = require('mongoose');

var product = mongoose.Schema({
    name: String,
    path: String,
    price: Number,
    detail: String,
    count: Number,
    status: Boolean,
    date: {type: Date, default: Date.now(),}
});

var Product = mongoose.model('Product',product, 'products');
module.exports = Product;

