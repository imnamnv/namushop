const express= require('express');
const multer = require('multer');

//set up multer
var upload = multer({dest: './public/uploads/'});

//set up router
const router = express.Router();
const controller = require('../../controllers/admin.controller.js');
router.get('/',controller.index);
router.get('/carousel',controller.carousel);
router.post('/carousel',upload.array('carousels',12),controller.uploadImgs1);

router.get('/product',controller.product);
router.post('/product',upload.single('avatar'),controller.uploadProduct);

module.exports = router;