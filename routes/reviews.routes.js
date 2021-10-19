const { Router } = require("express");
const router = Router();
const reviewController = require("../controllers/reviews.controller");

router.get("/:id", reviewController.getReviews);

module.exports = router;
