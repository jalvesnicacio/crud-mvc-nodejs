
const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.post('/products', productsController.createProduct);
router.get('/products', productsController.getProducts);

router.get('/', (req, res) => {
    res.send('Hello World!')
})

module.exports = router;