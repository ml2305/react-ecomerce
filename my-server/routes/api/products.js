const products = require('../../consts/products');
const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.json(products);
});

router.get('/:id', function(req, res) {
    res.json(products.find(product => product.id === parseInt(req.params.id)));
});

module.exports = router;
