var Carousel = require('../models/carousel.model');
module.exports.demoController = (req,res)=>{
    Carousel.find().then(function(carousels){
        console.log(carousels[carousels.length-1].path);
        res.render('../views/index.pug',{
            carousels : carousels
        });
    });
}