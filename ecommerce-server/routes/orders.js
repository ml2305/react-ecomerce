var express = require("express");
var router = express.Router();
const products = require("../consts/products");

let orderNumber = 0;

router.post("/", function (req, res, next) {
  orderNumber += 1;
  let totalPrice = 0;
  const sentProducts = req.body.products;

  if (orderNumber % 3 === 0) {
    res.status(500).send('אופס... קרתה תקלה בעת ההזמנה');
  }

  sentProducts.forEach((sentProduct) => {
    totalPrice +=
      sentProduct.amount *
      products.find((product) => product.id === +sentProduct.id).price;
  });

  res.send({ id: orderNumber, totalPrice });
});

module.exports = router;
