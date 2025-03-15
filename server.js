const express = require('express');
const app = express();

app.get('/api/get', (req, res)=>{
    res.send({message:'Hello from Nodejs.'});
});

app.get('/api/users', (req, res)=>{
    res.send({message:'Hello from Nodejs users.'});
});

app.get('/api/products', (req, res)=>{
    res.send({message:'Hello from Nodejs products.'});
});

app.listen(8000, ()=>{
    console.log('Listening to 8000');
})