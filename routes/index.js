const router = require("express").Router();

const ProductRouter= require("./products");


router.use("/super", ProductRouter);


module.exports= router;