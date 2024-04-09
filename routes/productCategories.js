const express = require('express');
const productCategories = express.Router();
const mysql = require('mysql');

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Sweet*1345",
    database: "estore",
    port: 3306,
    multipleStatements: true
})


productCategories.get('/', (req, res) => {
    console.log("in product ")
    pool.query("SELECT * from categories", (err, categories) =>{
        if(err) res.status(500).send(err)
        res.status(200).send(categories);
    });
});

productCategories.get('/products', (req,res) => {
    pool.query("select * from products", (err, products) => {
        if(err) res.status(500).send(err)
        res.status(200).send(products);
    })
})

module.exports = productCategories;