const categoriesServices = require("../services/categories.services");
const brandsServices = require("../services/brands.services");

const categoriesController = {
  categories: async (req, res) => {
    try {
      const { data, status, error } = await categoriesServices.getAll();

      error ? res.status(status).json(error) : res.status(status).json(data);
    } catch (e) {
      res.status(500).json(e);
    }
  },

  category: async (req, res) => {
    try {
      const { id } = req.params;

      const { data, status, error } = await categoriesServices.get(id);

      error ? res.status(status).json(error) : res.status(status).json(data);
    } catch (e) {
      res.status(500).json(e);
    }
  },
};

module.exports = categoriesController;
