const { Reviews } = require("../models");

const reviewsServices = {
  getReviews: async (brandId) => {
    let status = null;
    let error = null;
    let data = {};

    try {
      const reviews = await Reviews.findAll({ where: { brandId } });

      reviews
        ? ((status = 200), (data = reviews))
        : ((status = 404), (data = "Nenhuma avaliação encontrada"));
    } catch (e) {
      status = 500;
      error = e;
    }

    return { data, status, error };
  },
};

module.exports = reviewsServices;
