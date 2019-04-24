var Carousel = require('../models/carousel.model');
module.exports.index = (req,res)=>{
    res.render('../views/admin/index.pug');
}
module.exports.carousel = (req,res)=>{
    Carousel.find().then(function(carousels){
        console.log(carousels);
        res.render('../views/admin/carousel.pug',{
            carousels : carousels
        });
    });
}