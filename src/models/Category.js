const Sequelize = require("sequelize");
const sequelize = require("../database/connection");
const Category = sequelize.define("Category", {
	name: { type: Sequelize.STRING(45), allowNull: false } //parent_id: Sequelize.INTEGER(11)
});

Category.belongsTo(Category, {
	foreignKey: "parent_id",
	as: "myParent"
});
module.exports = Category;
