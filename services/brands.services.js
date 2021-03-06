const { Brands, Categories, Reviews } = require("../models");

const brandsServices = {
  getAll: async (id) => {
    let status = null;
    let error = null;
    let data = {};
    let brands = await Brands.findAll({
      include: {
        model: Categories[id],
        as: "Categories",
        required: true,
      },
    });

    try {
      if (brands) {
        let { image, description } = brands;
        data = {
          image,
          description,
        };
      } else {
        status = 404;
        res.send("Nenhuma marca encontrada");
      }
    } catch (e) {
      status = 500;
      error = e;
    }

    return { data, status, error };
  },
  getOne: async (id) => {
    let data = {};
    let status = null;
    let error = null;

    try {
      const brand = await Brands.findOne({
        where: { id },
        include: {
          model: Reviews,
          as: "reviews",
          require: true,
        },
      });

      if (brand) {
        data = brand;
        status = 200;
      } else {
        status = 404;
        data = "Brand não encontrada";
      }
    } catch (e) {
      status = 500;
      error = e;
      console.log(error);
    }

    return { data, status, error };
  },
};

module.exports = brandsServices;
