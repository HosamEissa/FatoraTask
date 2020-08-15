const Sequelize = require("sequelize");
const sequelize = require("../database/connection");
const Provider = require("./Provider");
const Product = require("./Product");
const ProductsProvider = sequelize.define("product_providers", {
	available: { type: Sequelize.BOOLEAN, defaultValue: false, allowNull: false },
	price: { type: Sequelize.DOUBLE, defaultValue: 0, allowNull: false }
});
Product.belongsToMany(Provider, { through: "product_providers" });
Provider.belongsToMany(Product, { through: "product_providers" });

module.exports = ProductsProvider;
