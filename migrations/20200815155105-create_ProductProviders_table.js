"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("product_providers", {
			ProviderId: {
				type: Sequelize.INTEGER(11),
				allowNull: false,
				references: { model: "providers", key: "id" },
				primaryKey: true
			},
			ProductId: {
				type: Sequelize.INTEGER(11),
				allowNull: false,
				references: { model: "products", key: "id" },
				primaryKey: true
			},

			available: { type: Sequelize.BOOLEAN, defaultValue: false, allowNull: false },
			price: { type: Sequelize.DOUBLE, defaultValue: 0, allowNull: false },
			createdAt: Sequelize.DATE,
			updatedAt: Sequelize.DATE
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("product_providers");
	}
};
