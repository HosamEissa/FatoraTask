const express = require("express");
const Category = require("../models/Category");
const router = new express.Router();

router.get("/", async (req, res) => {
	try {
		const categories = await Category.findAll({
			attributes: ["id", "name"]
		});

		return res.send({ categories });
	} catch (error) {
		return res.status(500).send(error);
	}
});

router.get("/:id", async (req, res) => {
	try {
		const category = await Category.findOne({
			where: { id: req.params.id },
			attributes: ["id", "name"]
			//include: [{ model: Category, as: "myParent", attributes: ["id", "name"] }]
		});
		if (!category) {
			return res.status(404).send({ Message: "Category Not Found" });
		}
		return res.send({ category });
	} catch (error) {
		return res.status(500).send(error);
	}
});

router.post("/", async (req, res) => {
	try {
		const category = await Category.create({
			name: req.body.name,
			parent_id: req.body.parent_id
		});
		category.save();
		return res.send({ category });
	} catch (error) {
		return res.status(500).send(error);
	}
});
router.put("/:id", async (req, res) => {
	try {
		const category = await Category.findByPk(req.params.id);
		if (!category) return res.status(404).send({ Message: "Category Not Found" });
		if (req.body.name) category.name = req.body.name;
		if (req.body.parent_id) category.parent_id = req.parent_id;
		await category.save();
		return res.send({ category });
	} catch (error) {
		return res.status(500).send(error);
	}
});

router.delete("/:id", async (req, res) => {
	try {
		const deleted = await Category.destroy({
			where: { id: req.params.id }
		});
		const message = deleted ? "Category Deleted" : "Category Not Found";
		return res.send({ message });
	} catch (error) {
		return res.status(500).send(error);
	}
});
module.exports = router;
