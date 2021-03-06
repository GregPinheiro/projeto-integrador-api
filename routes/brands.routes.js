const { Router } = require("express");
const router = Router();
const brandsController = require("../controllers/brands.controller");

router.get("/:id", brandsController.marca);

module.exports = router;
