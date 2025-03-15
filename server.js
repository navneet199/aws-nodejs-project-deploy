const express = require('express');
const app = express();
require("dotenv").config();
const bcrypt = require('bcrypt');

app.get('/api/get', (req, res)=>{
    res.send({message:'Hello from Nodejs.'});
});

app.get('/api/users', (req, res)=>{
    res.send({message:'Hello from Nodejs users route.'});
});

app.get('/api/products', (req, res)=>{
    res.send({message:'Hello from Nodejs products.'});
});

app.get('/api/categories', (req, res)=>{
    res.send({message:process.env.MYNAME});
});


app.get('/api/password', async(req, res)=>{
    const password = "123456789";
    const saltRounds = 10; // Adjust for security vs performance
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    // return hashedPassword;
    res.send({message:hashedPassword});
});



app.listen(8000, ()=>{
    console.log('Listening to 8000 ok');
})