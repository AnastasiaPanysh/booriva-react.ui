const express = require('express')
const {getProducts, createProduct} = require('../service/products.service')
const route = express.Router()


route.get('/', async (req,res)=>{
    try {
        const products = await getProducts()
        res.status(200).send(products)
    } catch (error) {
        res.status(404).send(error.message)

    }
})

route.post('/', async (req,res)=>{
    try {
      const { title, price } = req.body;
      const products = await createProduct(title, price);
      res.status(200).send(products)
    } catch (error) {
        res.status(404).send(error.message)
    }
  });
  


module.exports = route;