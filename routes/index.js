const router = require("express").Router();

const routerprod = require("./products");


router.use("/super", routerprod);
