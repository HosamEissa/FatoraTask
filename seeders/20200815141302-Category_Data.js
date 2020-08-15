"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert("categories", [
			{
				name: "Category 1",
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "Category 2",
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "Category 3",
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "Category 4",
				createdAt: new Date(),
				updatedAt: new Date()
			}
		]);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("categories", null, {});
	}
};
