const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(express.json());

app.get("/", function(req, res) {
    res.send("welcome to express!");
});

app.use(cors());
app.use('/products', require ('./routes/api/products'));
app.use('/brands', require('./routes/api/brands'));
app.use('/order', require('./routes/api/order'));

const PORT = process.env.PORT || 8080;

app.listen(PORT , () => console.log(`server is running on port ${PORT}`));