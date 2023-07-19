const express = require('express');
const dotenv= require('dotenv').config();
const path = require('path');
const ejs = require ('ejs');
const { ErrorPage } = require("./controllers/ErrorPAge");
const { HomePage } = require('./controllers/HomePage');
const routes = require('./routes');
const app= express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); 

app.set('views',path.join(__dirname,'/views')); 
app.use(express.static(path.join(__dirname , "public")));

app.set('view engine', 'ejs');

app.use("/api", routes);

app.get('/', HomePage);

app.get("*", ErrorPage);


app.listen(PORT, ()=>{console.log(`escuchando en el puerto ${PORT}`)})