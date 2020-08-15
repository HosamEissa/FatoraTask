const express = require("express");
const Provider = require("../models/Provider");
const getPagination = require("../middleware/Pagging");
const ProductsProvider = require("../models/Product_Provider");
const Product = require("../models/Product");

const router = new express.Router();

router.get("/", getPagination, async (req, res) => {
	try {
		const { limit, offset } = req.pagging;

		const providers = await Provider.findAll({
			attributes: ["id", "name"],
			limit,
			offset
		});
		return res.send({ providers });
	} catch (error) {
		return res.status(500).send(error);
	}
});

router.get("/:id", async (req, res) => {
	try {
		const providers = await Provider.findOne({
			where: { id: req.params.id },
			attributes: ["id", "name"]
		});
		if (!providers) {
			return res.status(404).send({ Message: "Provider Not Found" });
		}
		return res.send({ providers });
	} catch (error) {
		return res.status(500).send(error);
	}
});

router.post("/", async (req, res) => {
	try {
		const provider = await Provider.create({
			name: req.body.name,
			parent_id: req.body.parent_id
		});
		provider.save();
		return res.send({ provider });
	} catch (error) {
		return res.status(500).send(error);
	}
});
router.post("/addProduct/:id", async (req, res) => {
	try {
		const provider = await Provider.findByPk(req.params.id);
		console.log(provider);
		const product = await Product.findByPk(req.body.productId);
		if (!provider) return res.status(404).send({ Message: "Provider Not Found" });
		if (!product) return res.status(404).send({ Message: "Product Not Found" });
		const productsProvider = await ProductsProvider.create({
			ProductId: req.body.productId,
			ProviderId: req.params.id,
			available: req.body.available,
			price: req.body.price
		});
		await productsProvider.save();

		return res.send({ productsProvider });
	} catch (error) {
		return res.status(500).send(error);
	}
});
router.put("/:id", async (req, res) => {
	try {
		const provider = await Provider.findByPk(req.params.id);
		if (!provider) return res.status(404).send({ Message: "Provider Not Found" });
		if (req.body.id) provider.name = req.body.name;
		await provider.save();
		return res.send({ provider });
	} catch (error) {
		return res.status(500).send(error);
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const deleted = await Provider.destroy({
			where: { id: req.params.id }
		});
		const message = deleted ? "Provider Deleted" : "Provider Not Found";
		return res.send({ message });
	} catch (error) {
		return res.status(500).send(error);
	}
});
module.exports = router;
