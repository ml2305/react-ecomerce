const brands = require('../../consts/brands');
const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.json(brands);
});

module.exports = router;