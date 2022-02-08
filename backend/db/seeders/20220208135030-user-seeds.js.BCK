'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {email: 'demo@user.io', username:'demouser', hashedPassword:  bcrypt.hashSync('password')},
      {email: 'diver1@user.io', username:'diver1', hashedPassword:  bcrypt.hashSync('password')},
      {email: 'diver2@user.io', username:'diver2', hashedPassword:  bcrypt.hashSync('password')},
  ], ); //{fields: ['email', 'username'], returning: true});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
