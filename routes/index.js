const router = require("express").Router();
const path = require("path");
const ProductsRouter= require("./products");

router.use("/super", ProductsRouter);

module.exports= router;