const express = require('express');
const app = express();
const productCategories = require('./routes/productCategories');
const cors = require('cors');

app.use(cors())
app.use('/productCategories', productCategories);

app.listen(5001, ()=>{
    console.log(`eStore server running on port - 5001`)
})

