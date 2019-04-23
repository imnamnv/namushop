const express= require('express');
const router = express.Router();
const controller = require('../../controllers/admin.controller.js');
router.get('/',controller.index);
router.get('/carousel',controller.carousel);


module.exports = router;