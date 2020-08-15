const Sequelize = require("sequelize");

const sequelize = new Sequelize("fatora_task", "root", "12345", {
	host: "127.0.0.1",
	dialect: "mysql",
	opeartorAliases: false
});

module.exports = sequelize;
