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

/* app.use((req, res, next) => {
  res.header("Content-Type", "application/json; charset=utf-8");
  next();
});       */

app.set("view engine", "ejs");

/* app.use(express.static(path.join(__dirname+ "/public"))); */  

app.use("/api", routes);

app.get('/', HomePage);

app.get("*", ErrorPage);


app.listen(PORT, ()=>{console.log(`escuchando en el puerto ${PORT}`)})