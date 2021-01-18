var express = require("express");
var router = express.Router();
const products = require('../consts/products')

router.get("/", function (req, res, next) {
  res.send(products);
});

router.get("/:id", function (req, res, next) {
  res.send(products.find(product => product.id === +req.params.id));
});

module.exports = router;
