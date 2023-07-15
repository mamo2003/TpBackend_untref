const router = require("express").Router();
const ProductsRouter= require("./products");

router.use("/super", ProductsRouter);

module.exports= router;