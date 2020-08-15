"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert("products", [
			{
				name: "Product 1",
				createdAt: new Date(),
				updatedAt: new Date(),
				category_id: 1,
				isFeatured: true
			},
			{
				name: "Product 2",
				createdAt: new Date(),
				updatedAt: new Date(),
				category_id: 1,
				isFeatured: true
			},
			{
				name: "Product 3",
				createdAt: new Date(),
				updatedAt: new Date(),
				category_id: 1,
				isFeatured: true
			},
			{
				name: "Product 4",
				createdAt: new Date(),
				updatedAt: new Date(),
				category_id: 2,
				isFeatured: true
			},
			{
				name: "Product 5",
				createdAt: new Date(),
				updatedAt: new Date(),
				category_id: 2,
				isFeatured: true
			},
			{
				name: "Product 6",
				createdAt: new Date(),
				updatedAt: new Date(),
				category_id: 3,
				isFeatured: true
			}
		]);
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete("products", null, {});
	}
};
