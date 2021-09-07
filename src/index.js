const express= require('express');

const app= express();

const Users={}

app.listen(3000)

app.get('/',(req,res)=>{
    res.end('Hello World!');
});

app.get('/users',(req,res)=>{
    res.json(Users);
});
