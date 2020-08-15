"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert("product_providers", [
			{
				ProviderId: 1,
				ProductId: 1,
				available: 1,
				price: 10,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				ProviderId: 2,
				ProductId: 1,
				available: 1,
				price: 13,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				ProviderId: 3,
				ProductId: 1,
				available: 1,
				price: 20,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				ProviderId: 1,
				ProductId: 2,
				available: 1,
				price: 10,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				ProviderId: 2,
				ProductId: 2,
				available: 1,
				price: 5,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				ProviderId: 3,
				ProductId: 3,
				available: 1,
				price: 10,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				ProviderId: 1,
				ProductId: 4,
				available: 1,
				price: 123,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				ProviderId: 4,
				ProductId: 5,
				available: 1,
				price: 242,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				ProviderId: 2,
				ProductId: 6,
				available: 1,
				price: 11,
				createdAt: new Date(),
				updatedAt: new Date()
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
		await queryInterface.bulkDelete("product_providers", null, {});
	}
};
