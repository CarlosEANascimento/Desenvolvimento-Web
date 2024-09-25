const express = require('express');
const path = require('path');
const fs = require('node:fs');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'public','index.html'))
});

app.get('/about', (req,res) => {
    res.sendFile(path.join(__dirname,'public','about.html'))
});

app.get('/formulario', (req,res) => {
    res.sendFile(path.join(__dirname,'public','form.html'));
});

app.get('/submit*', (req,res) => {
    let a = "username: "+req.query.username+", name: "+req.query.name;

    fs.writeFile(path.join(__dirname,'data.txt'), a, err =>{
        if(err){
            res.sendFile(path.join(__dirname,'public','404.html'));
        }else{
            res.sendFile(path.join(__dirname,'public','greetings.html'));
        }
    });
});

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname,'public','404.html'));
})

app.listen(port, ()=>{
    console.log('http://localhost:'+port)
});