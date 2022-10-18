'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('comentarios', [
      {
      usuario: 'Lysia Leão',
      comentario: 'Ótimo dia'
      }, 
      {
      usuario: 'Lysia Caroline',
      comentario: 'Péssimo dia'
      },
      {
        usuario: 'Lysia Féres',
        comentario: 'Dia bem mais ou menos'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('People', null, {});
  }
};
