'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [{
      name: 'One',
      description: 'Just a number.',
      price: 1.00,
      image: 'http://localhost:3001/images/1.png',
      quantity: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Two',
      description: 'Just a number.',
      price: 22.00,
      image: 'http://localhost:3001/images/2.png',
      quantity: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Tree',
      description: 'Just a number.',
      price: 333.00,
      image: 'http://localhost:3001/images/3.png',
      quantity: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Four',
      description: 'Just a number.',
      price: 4444.00,
      image: 'http://localhost:3001/images/4.png',
      quantity: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Five',
      description: 'Just a number.',
      price: 55555.00,
      image: 'http://localhost:3001/images/5.png',
      quantity: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Six',
      description: 'Just a number.',
      price: 6000.00,
      image: 'http://localhost:3001/images/6.png',
      quantity: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Seven',
      description: 'Just a number.',
      price: 799.99,
      image: 'http://localhost:3001/images/7.png',
      quantity: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Eight',
      description: 'Just a number.',
      price: 800.00,
      image: 'http://localhost:3001/images/8.png',
      quantity: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Nine',
      description: 'Just a number.',
      price: 9.99,
      image: 'http://localhost:3001/images/9.png',
      quantity: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Ten',
      description: 'Just a number.',
      price: 1000.11,
      image: 'http://localhost:3001/images/10.png',
      quantity: 1,
      createdAt: new Date(),
      updatedAt: new Date()
  }], {});
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Products', null, {});
  }
};
