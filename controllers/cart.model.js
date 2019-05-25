const mongoose = require('mongoose')

var cart = mongoose.Schema({
    idUser: String,
    userName:String,
    total: Number,
    detail: Array,
    date: {type: Date, default: Date.now(),},
    status: Boolean
});

var Cart = mongoose.model('Cart',cart, 'cart');
module.exports = Cart;