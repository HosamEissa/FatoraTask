const Sequelize = require("sequelize");
const sequelize = require("../database/connection");
const Provider = sequelize.define("Provider", {
	name: { type: Sequelize.STRING(45), allowNull: false }
});
module.exports = Provider;
