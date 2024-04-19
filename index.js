const express = require('express');
const path = require('path');
const bodyparser = require('body-parser')
const route =require("./userroute");
const router = require('./userroute');


const app = express();
const port =4000;

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(router);


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+ "/index.html"));

});

app.post('/api/v1/register', (req, res) => {

    const userName = req.body.name;
    const userEmail= req.body.email;
    const userPassword= req.body.password;

  res.json ({
    
  sucess : true,

  });
});


app.get('/about', (req, res) => {
    res.send("<h1>ABOUT PAGE HAI MERA ${req.body.name} </h1>");
  });

app.get('/service', (req, res) => {
    res.send("<h1>WELCOME TO OUR SERVICES !</h1>");
  }); 


app.get( '/contact' , ( req , res )=>{
    res.send("contact");
    });


app.post( "/api.v1/login" , ( req , res )=>{
     
    res.send(`<h1> HELLO THIS IS DONE Mr. ${req.body.name} </h1> <h2> your email is : ${req.body.email} </h2> <h2> your password is : ${req.body.password} </h2>`);
    console.log(req.body);

    
});


app.listen(port, () => {
  console.log(`Server is running on : ${port}`);

});

