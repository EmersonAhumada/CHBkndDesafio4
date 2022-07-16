const express = require('express');
const { Router } = express;
const router = Router();

const products = [
    { title: 'Escuadra', price: '123.45', thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png', id: 1 },
    { title: 'Calculadora', price: '234.56', thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png', id: 2 },
    { title: 'Globo Terráqueo', price: '345.67', thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png', id: 3 },
  ];
   
router.get('/', (req, res) => {
    res.status(200).send(products);
}); 

router.get('/:id', (req, res) => {
    const { id } = req.params;
    if (id >= 1 && id <= products.length) {
      res.status(201).send(products[id - 1]);
    } else {
      res.status(400).send({ status: 'not found' });
    }
  });

router.post('/', (req, res) => {
    const newProduct = req.body; 
    newid=products.length+1;
    let savedProduct = { ...newProduct, id: newid }
    products.push(savedProduct);
    res.status(201).send({ status: 'posted' });
    });

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const tempProduct = req.body;
    if ( id>= 1 && id <= products.length) {
        let updatedProduct = { ...tempProduct, id: parseInt(id) };
        products.splice(id - 1, 1, updatedProduct);
        res.status(201).send({ status: 'updated ok' });
      } else {
        res.status(400).send({ status: 'no product on file' });
      }
    });

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    if (id >= 1 && id <= products.length) {
      products.splice(id - 1, 1, );
      res.status(201).send({ message: 'Deleted OK' });
    } else {
      res.status(400).send({ error: 'no product on file' });
    }
    });


module.exports = router;