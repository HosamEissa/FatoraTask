const express = require("express");
const getPagination = require("../middleware/Pagging");
const Category = require("../models/Category");
const Product = require("../models/Product");
const Provider = require("../models/Provider");
const sequelize = require("../database/connection");
const ProductsProvider = require("../models/Product_Provider");
const router = new express.Router();

router.get("/categoryProducts/:id", getPagination, async (req, res, next) => {
	try {
		const { limit, offset } = req.pagging;
		const category = await Category.findByPk(req.params.id);
		const products = await category.getProducts({
			where: { isFeatured: 1 },
			attributes: ["name", "id", [sequelize.fn("max", sequelize.col("price")), "maxPrice"]],
			group: ["id"],
			order: [[sequelize.fn("max", sequelize.col("price")), "ASC"]],

			include: [
				{
					model: Provider,
					attributes: [],
					through: { where: { available: 1 }, attributes: ["price"] }
				}
			],
			offset,
			limit,
			subQuery: false
		});
		res.send(products);
	} catch (error) {
		return res.status(500).send(error);
	}
});

router.put("/featureproduct/:id", async (req, res) => {
	try {
		const product = await Product.findByPk(req.params.id);
		if (!product) return res.status(404).send({ Message: "Product Not Found" });
		product.isFeatured = req.body.isFeatured;
		await product.save();
		return res.send({ product });
	} catch (error) {
		return res.status(500).send(error);
	}
});
module.exports = router;
