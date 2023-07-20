const { ErrorPage } = require("../controllers/ErrorPage");
const { SearchCode } = require("../controllers/SearchCode");
const { DeleteCode } = require("../controllers/DeleteCode");
const { Super } = require("../controllers/Super");
const { createCode } = require("../controllers/createCode");
const { changeCode } = require("../controllers/changeCode");
const { SearchCat } = require("../controllers/SearchCat");
const { SearchName } = require("../controllers/SearchName");
const path = require("path");
const router = require('express').Router();


router.get("/", Super);

router.get("/:id", SearchCode);

router.get("/categoria/:categoria", SearchCat);

router.get("/nombre/:nombre", SearchName);

router.post("/", createCode);

router.put("/:id", changeCode);

router.delete("/:id", DeleteCode);

router.get("*", ErrorPage); 

module.exports = router;
