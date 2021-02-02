const products = require('../../consts/products');
const express = require('express');
const router = express.Router();

let orderId = 0;

router.post('/', function(req, res) {
    orderId += 1;
    let totalPrice = 0;
    const sentProducts = req.body.products;

    if (orderId % 3 === 0) {
        res.status(500).send('error');
      }

  sentProducts.forEach((sentProduct) => {
    totalPrice += sentProduct.amount * products.find((product) => product.id === sentProduct.id).price;
  });

  res.json({ id: orderId, totalPrice });
});

module.exports = router;