const express= require('express');
const multer = require('multer');
const controller = require('../../controllers/admin.controller.js');


//set up multer
var upload = multer({dest: './public/uploads/'});

//set up router
const router = express.Router();
router.get('/',controller.index);
router.get('/carousel',controller.carousel);
router.post('/carousel',upload.array('carousels',12),controller.uploadImgs1);
router.get('/product',controller.product);
router.post('/product',upload.single('avatar'),controller.uploadProduct);
//router.post('/product',upload.single('avatar'),controller.uploadProduct);
router.get('/pay',controller.pay);



module.exports = router;