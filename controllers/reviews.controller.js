const reviewsServices = require("../services/reviews.services");

const reviewController = {
  getReviews: async (req, res) => {
    try {
      const { id } = req.params;

      const { data, status, error } = await reviewsServices.getReviews(id);

      error ? res.status(status).json(error) : res.status(status).json(data);
    } catch (e) {
      res.status(500).json(e);
    }
  },
};

module.exports = reviewController;
