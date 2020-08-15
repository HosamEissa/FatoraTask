"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert("providers", [
			{
				name: "Provider 1",
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "Provider 2",
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "Provider 3",
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "Provider 4",
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
		await queryInterface.bulkDelete("providers", null, {});
	}
};
