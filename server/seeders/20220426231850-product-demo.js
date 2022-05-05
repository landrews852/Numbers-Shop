'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          name: 'One',
          description:
            'This is the description of the product. In this case, just a number. This is the description of the product. In this case, just a number. This is the description of the product. In this case, just a number. This is the description of the product. In this case, just a number.',
          price: 1.0,
          image: 'http://localhost:3001/images/1.png',
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Two',
          description:
            'This is the description of the product. In this case, just a number. This is the description of the product. In this case, just a number. This is the description of the product. In this case, just a number.',
          price: 22.0,
          image: 'http://localhost:3001/images/2.png',
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Tree',
          description:
            'This is the description of the product. In this case, just a number. This is the description of the product. In this case, just a number. This is the description of the product. In this case, just a number. This is the description of the product. In this case, just a number.',
          price: 333.0,
          image: 'http://localhost:3001/images/3.png',
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Four',
          description:
            'This is the description of the product. In this case, just a number. This is the description of the product. In this case, just a number. This is the description of the product. In this case, just a number.',
          price: 4444.0,
          image: 'http://localhost:3001/images/4.png',
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Five',
          description:
            'This is the description of the product. In this case, just a number. This is the description of the product. In this case, just a number. This is the description of the product. In this case, just a number.',
          price: 55555.0,
          image: 'http://localhost:3001/images/5.png',
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Six',
          description:
            'This is the description of the product. In this case, just a number. This is the description of the product. In this case, just a number. This is the description of the product. In this case, just a number. This is the description of the product. In this case, just a number.',
          price: 6000.0,
          image: 'http://localhost:3001/images/6.png',
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Seven',
          description:
            'This is the description of the product. In this case, just a number. This is the description of the product. In this case, just a number. This is the description of the product. In this case, just a number. This is the description of the product. In this case, just a number.',
          price: 799.99,
          image: 'http://localhost:3001/images/7.png',
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Eight',
          description:
            'This is the description of the product. In this case, just a number. This is the description of the product. In this case, just a number. This is the description of the product. In this case, just a number.',
          price: 800.0,
          image: 'http://localhost:3001/images/8.png',
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Nine',
          description:
            'This is the description of the product. In this case, just a number. This is the description of the product. In this case, just a number. This is the description of the product. In this case, just a number.',
          price: 9.99,
          image: 'http://localhost:3001/images/9.png',
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Ten',
          description:
            'This is the description of the product. In this case, just a number. This is the description of the product. In this case, just a number. This is the description of the product. In this case, just a number.',
          price: 1000.11,
          image: 'http://localhost:3001/images/10.png',
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Products', null, {});
  },
};
