const { Router } = require("express");
const router = Router();
const categoriesController = require("../controllers/categories.controller");

router.get("/", categoriesController.categories);
router.get("/:id", categoriesController.category);

module.exports = router;
