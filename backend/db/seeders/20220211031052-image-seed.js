'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Images', [
      {locationId: 1, url:'../../images/octo.jpeg'},
      {locationId: 2, url:'../../images/west-seattle-eal.jpg'},
      {locationId: 3, url:'../../images/mtn-bay-view.jpg'},
      {locationId: 4, url:'../../images/squide.jpg'},
      {locationId: 5, url:'../../images/reef-1.jpeg'},
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Images', null, {});
  }
};
