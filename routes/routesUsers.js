const express= require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.get('/miCarrito', controller.shoppingCart)

module.exports = router;