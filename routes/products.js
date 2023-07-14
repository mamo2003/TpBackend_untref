const { ErrorPage2 } = require("../controllers/ErrorPage2");
const { SearchCode } = require("../controllers/SearchCode");
const { DeleteCode } = require("../controllers/DeleteCode");
const { Super } = require("../controllers/super");
const { createCode } = require("../controllers/createCode");
const { changeCode } = require("../controllers/changeCode");
const { SearchCat } = require("../controllers/SearchCat");
const { SearchName } = require("../controllers/SearchName");

const router = require('express').Router();


router.get("/", Super);

router.get("/:id", SearchCode);

router.get("/categoria/:categoria", SearchCat);

router.get("/nombre/:nombre", SearchName);

router.post("/", createCode);

router.put("/:id", changeCode);

router.delete("/:id", DeleteCode);

router.get("/*", ErrorPage2); 

module.exports = router;
