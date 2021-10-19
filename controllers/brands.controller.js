const brandsServices = require("../services/brands.services");

const brandsController = {
  marca: async (req, res) => {
    try {
      const { id } = req.params;

      const { data, status, error } = await brandsServices.getOne(id);

      error ? res.status(status).json(error) : res.status(status).json(data);
    } catch (e) {
      res.status(500).json(e);
    }
  },
};

module.exports = brandsController;
