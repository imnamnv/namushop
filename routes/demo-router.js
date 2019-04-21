const express= require('express');
const router = express.Router();
const controller = require('../controllers/demo-controller.js');
router.get('/',controller.demoController);

module.exports = router;