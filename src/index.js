const express= require('express');

const app= express();

const Users=[]

app.listen(3000)

app.get('/',(req,res)=>{
    res.end('Hello World!');
});

app.get('/users',(req,res)=>{
    res.send(Users);
    res.end();
});

app.post('/users',(req,res)=>{
    Users.push({id:Users.length()-1});
    res.end();
});

app.get('/users/:id',(req,res)=>{
    res.send(Users[req.params.id]);
    res.end();
});
