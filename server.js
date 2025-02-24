const express = require('express');
const port = 3000
const app = express();

const users= []

app.use(express.json());

app.get('/users',(req,res)=>{
    return res.json(users);
})



app.post('/users',(req,res)=>{
    const {Email,password} = req.body;

    if(!Email){
        res.json({message: "E-mail cannot be empty"})
    }
    if(!password){
        res.json({message:"Password cannot be empty"})
    }

    const newuser = {Email,password};
    users.push(newuser);

    res.json({message: "User created"})

    console.log(users)


})














app.listen(port,()=>{
    console.log('server running @ port 3000')
})