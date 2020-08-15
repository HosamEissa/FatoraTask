"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("categories", {
			id: {
				type: Sequelize.INTEGER(11),
				allowNull: false,
				autoIncrement: true,
				primaryKey: true
			},
			name: { type: Sequelize.STRING(45), allowNull: false },
			parent_id: {
				type: Sequelize.INTEGER(11),
				references: { model: "categories", key: "id" },
				onUpdate: "CASCADE",
				onDelete: "SET NULL"
			},
			createdAt: Sequelize.DATE,
			updatedAt: Sequelize.DATE
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("categories");
	}
};
