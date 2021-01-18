var express = require("express");
var router = express.Router();

const brands = [
    {
        id: 1,
        name: "Apple",
      },
      {
        id: 2,
        name: "Huawei",
      },
      {
        id: 3,
        name: "Meizu",
      },
      {
        id: 4,
        name: "Samsung",
      },
      {
        id: 5,
        name: "Vestel",
      },
      {
        id: 6,
        name: "Xiaomi",
      },
]
router.get("/", function (req, res, next) {
    res.send(brands);
  });

module.exports = router;
