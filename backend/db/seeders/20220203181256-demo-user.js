'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert('Users', [
       {email: 'demo@user.io', username:'DemoUser', hashedPassword: bcrypt.hashSync('password')},
       {email: 'user1@user.io', username:'FakeUSer1', hashedPassword: bcrypt.hashSync('password')},
       {email: 'user2@user.io', username:'FakeUSer2', hashedPassword: bcrypt.hashSync('password')},
     ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
   return queryInterface.bulkDelete('Users', {
     username: { [Op.in]: ['DemoUser', 'FakeUser1', 'FakeUSer2']  }
   }, {});
  }
};
