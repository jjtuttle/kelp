'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
 
   return queryInterface.bulkInsert('Reviews', [
      {rating: '3', body:'It as OK, would dive again but not all the time', userId: 1, locationId: 1},
      {rating: '4', body:'Greta find, we dive there at least twice a month!!! Love it!', userId: 2, locationId: 1},
      {rating: '2', body:'Ya, I would stay away from that place if you want to keep your gear long. Else you will need to buy special cleaners and spend a couple extra hours right after dive soaking it all.', userId: 3, locationId: 2},
      {rating: '5', body:'AWESOME!!!!!!!', userId: 3, locationId: 3},
      {rating: '5', body:'Yes, yes, did I say yes? This place can really be a great dive, never had a bad one YET!', userId: 1, locationId: 4},
   ], {});
  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.bulkDelete('Reviews', null, {
     
   });
  }
};
