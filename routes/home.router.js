const express= require('express');
const router = express.Router();
const controller = require('../controllers/home.controller.js');
router.get('/',controller.index);
router.get('/products',controller.listPro);
router.get('/products/:id',controller.productDetail);

module.exports = router;