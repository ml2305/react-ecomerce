var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var productsRouter = require('./routes/products');
var brandsRouter = require('./routes/brands');
var ordersRouter = require('./routes/orders')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/products', productsRouter);
app.use('/brands', brandsRouter);
app.use('/order', ordersRouter)
module.exports = app;
