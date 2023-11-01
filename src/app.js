const express = require('express');
const cors = require('cors');
const app = express();
const productsRouter = require('./routes/products');


app.use(express.json());

// Middleware para habilitar o CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); 
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
  });

app.use('/', productsRouter);


const port = process.env.PORT || 8000
app.listen(port, () => { 
    console.log(`API: Server is up at port:${port}`) 
})


module.exports = app;