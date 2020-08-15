const Sequelize = require("sequelize");
const sequelize = require("../database/connection");
const Category = require("./Category");
const Product = sequelize.define("Product", {
	name: { type: Sequelize.STRING(45), allowNull: false }, //parent_id: Sequelize.INTEGER(11)
	image_url: Sequelize.STRING(255),
	category_id: { type: Sequelize.INTEGER(11), allowNull: false },
	isFeatured: { type: Sequelize.BOOLEAN, defaultValue: false, allowNull: false }
});
Category.hasMany(Product, { as: "Products", foreignKey: "category_id" });
Product.belongsTo(Category, { as: "Category", foreignKey: "category_id" });
module.exports = Product;
