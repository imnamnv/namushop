const mongoose = require('mongoose');

var carousel = new mongoose.Schema({
    name: String,
    path: String,
    date: {type: Date, default: Date.now}
});

var Carousel = mongoose.model('Carousel',carousel, 'carousel');
module.exports = Carousel;