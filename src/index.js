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

app.post('/user',(req,res)=>{
    Users.push({id:Users.length});
    res.send(Users[Users.length]);
    res.end();
});

app.get('/user/:id',(req,res)=>{
    res.send(Users[req.params.id]);
    res.end();
});

app.delete('/user/:id',(req,res)=>{
    if(Users.length>=req.params.id){
        res.send(Users.splice(req.params.id,1)[0]);
        res.end();
    }
    else{
        res.statusCode=204;
        res.end();
    }
})
