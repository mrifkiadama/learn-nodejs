const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');

router.get('/', (req, res) => {
    res.json({
        message: 'Welcome client admin.',
    });
})

router.get('/products',ProductController.getAllProducts);

module.exports = router