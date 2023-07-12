const express = require('express');
const dotenv= require('dotenv').config();
const path = require('path');
const { connectToMongoDB, disconnectFromMongoDB } = require('./config/db');
const { ErrorPage } = require('./controllers/ErrorPage');
const { SearchCode } = require('./controllers/SearchCode');
const { HomePage } = require('./controllers/HomePage');
const { DeleteCode } = require('./controllers/DeleteCode');
const { Super } = require('./controllers/super');
const {createCode} = require ('./controllers/createCode');
const {changeCode} = require ('./controllers/changeCode');
const {SearchCat} = require ('./controllers/SearchCat')
const app= express();
const PORT = process.env.PORT || 3000;

/*  app.use((req, res, next) => {
  res.header("Content-Type", "application/json; charset=utf-8");
  next();
});  */
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get('/', HomePage);

app.get("/super", Super);

app.get("/super/:id", SearchCode);

app.get("/super/:categoria", SearchCat);

app.post("/super", createCode);

app.put("/super/:id", changeCode );

app.delete("/super/:id", DeleteCode);

app.get("*",ErrorPage);

app.listen(PORT, ()=>{console.log(`escuchando en el puerto ${PORT}`)})