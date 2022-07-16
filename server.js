const express = require('express');
const products = require('./modules/products');
const app = express();
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/products', products);
app.use('/static', express.static(__dirname + '/public'))
app.listen(8080, () => console.log('Servidor OK puerto 8080'));

