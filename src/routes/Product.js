const express = require("express");
const Product = require("../models/Product");
const router = new express.Router();

router.get("/", async (req, res) => {
	try {
		const products = await Product.findAll({
			attributes: ["id", "name", "image_url", "category_id", "isFeatured"]
		});

		return res.send({ products });
	} catch (error) {
		return res.status(500).send(error);
	}
});

router.get("/:id", async (req, res) => {
	try {
		const product = await Product.findOne({
			where: { id: req.params.id },
			attributes: ["id", "name", "image_url", "category_id", "isFeatured"]
		});
		if (!product) {
			return res.status(404).send({ Message: "Product Not Found" });
		}

		return res.send({ product });
	} catch (error) {
		return res.status(500).send(error.errors[0].message);
	}
});

router.post("/", async (req, res) => {
	try {
		const product = await Product.create({
			name: req.body.name,
			image_url: req.body.image_url,
			category_id: req.body.category_id,
			isFeatured: req.body.isFeatured || false
		});
		return res.send({ product });
	} catch (error) {
		return res.status(500).send({ name: error.name });
	}
});
router.put("/:id", async (req, res) => {
	try {
		console.log(!req.body.category_id);
		const product = await Product.findByPk(req.params.id);
		if (!product) return res.status(404).send({ Message: "Product Not Found" });
		if (req.body.name) product.name = req.body.name;
		if (req.body.image_url) product.image_url = req.body.image_url;
		if (req.body.category_id) product.category_id = req.body.category_id;
		if (req.body.isFeatured) product.isFeatured = req.body.isFeatured;

		await product.save();
		return res.send({ product });
	} catch (error) {
		return res.status(500).send(error);
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const deleted = await Product.destroy({
			where: { id: req.params.id }
		});
		const message = deleted ? "Product Deleted" : "Product Not Found";
		return res.send({ message });
	} catch (error) {
		return res.status(500).send(error.errors[0].message);
	}
});
module.exports = router;
