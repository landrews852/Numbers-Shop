'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [{
      name: 'One',
      description: 'Just a number.',
      price: '1.00',
      image: '/images/1.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Two',
      description: 'Just a number.',
      price: '22.00',
      image: '/images/2.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Tree',
      description: 'Just a number.',
      price: '333.00',
      image: '/images/3.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Four',
      description: 'Just a number.',
      price: '4444.00',
      image: '/images/4.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Five',
      description: 'Just a number.',
      price: '55555.00',
      image: '/images/5.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Six',
      description: 'Just a number.',
      price: '666666.00',
      image: '/images/6.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Seven',
      description: 'Just a number.',
      price: '7777777.00',
      image: '/images/7.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Eight',
      description: 'Just a number.',
      price: '88888888.00',
      image: '/images/8.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Nine',
      description: 'Just a number.',
      price: '999999999.00',
      image: '/images/9.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Ten',
      description: 'Just a number.',
      price: '1010101010.00',
      image: '/images/10.png',
      createdAt: new Date(),
      updatedAt: new Date()
  }], {});
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Products', null, {});
  }
};
