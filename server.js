const express = require('express');
const dotenv= require('dotenv').config();
const path = require('path');
const { HomePage } = require('./controllers/HomePage');
const {routerProd} = require('./routes/index')
const app= express();
const PORT = process.env.PORT || 3000;

/*  app.use((req, res, next) => {
  res.header("Content-Type", "application/json; charset=utf-8");
  next();
});  */
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));



app.get('/', HomePage);


app.listen(PORT, ()=>{console.log(`escuchando en el puerto ${PORT}`)})