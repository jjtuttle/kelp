'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Images', [
      {locationId: 1, url:'https://www.scubadiving.com/sites/scubadiving.com/files/styles/655_1x_/public/images/2017/11/drive_dive_washington_sea_lions_scd1217_dd_05.jpg'},
      {locationId: 2, url:'https://blog.wa.aaa.com/wp-content/uploads/2020/10/XB72868-D-brandon_cole.jpg'},
     
      {locationId: 4, url:'https://www.sportdiver.com/sites/sportdiver.com/files/styles/500_1x_/public/images/2017/08/scuba-diving-washing-state-squid-spd0817.jpg'},

    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Images', null, {});
  }
};
