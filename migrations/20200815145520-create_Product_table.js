"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add altering commands here.
		 *
		 * Example:
		 * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
		 */
		await queryInterface.createTable("products", {
			id: {
				type: Sequelize.INTEGER(11),
				allowNull: false,
				autoIncrement: true,
				primaryKey: true
			},
			name: { type: Sequelize.STRING(45), allowNull: false },
			image_url: Sequelize.STRING(255),
			category_id: {
				allowNull: false,
				type: Sequelize.INTEGER(11),
				references: { model: "categories", key: "id" },
				onUpdate: "CASCADE",
				onDelete: "CASCADE"
			},
			isFeatured: { type: Sequelize.BOOLEAN, defaultValue: false, allowNull: false },
			createdAt: Sequelize.DATE,
			updatedAt: Sequelize.DATE
		});
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add reverting commands here.
		 *
		 * Example:
		 * await queryInterface.dropTable('users');
		 */
		await queryInterface.dropTable("products");
	}
};
