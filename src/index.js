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
    var j=-1
    for(let i=0;i<Users.length;i++){
        if(Users[i].id==req.params.id){
            j=i;
            break;
        }
    }

    if(j!=-1){
        res.statusCode=202;
        res.send(Users.splice(j,1)[0]);
        res.end();
    }
    else{
        res.statusCode=204;
        res.end();
    }
})
