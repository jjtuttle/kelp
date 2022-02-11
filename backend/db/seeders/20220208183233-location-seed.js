'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
   return queryInterface.bulkInsert('Locations', [
      {userId: 1, title: 'Three Tree in Burien', body:'I went here for the first time with a group and was not a bad dive at all, I am new but was able to hand;e the depths and currents at three tree, check it out!!!', address: '', city: '', state: '', zipCode:'',lat:7.4703768,lng:  -122.3467918},
      {userId: 2,title: 'West Seattle Reef', body:'We went on a charter boat dive to the West Seattle Reef by Alki, wow I never knew how much Rock Fish were there! Too bad we cannot fish them.', address: '12345 1st St N', city: 'Seattle', state: 'WA', zipCode:'98104',lat:47.5667,lng:122.3868 },
      {userId: 3,title: 'Commencement Bay, OMG, so nasty!', body:'What are sone cleaning methods for your gear when you dive at commencement bay? I did not think it was bad, went home and rinsed my gear off with tap water and let it hang to dry as normal. Later that night an odd smell, bad smell is coming from my garage now and I used my nose to smell around and it is coming from my gear for sure.', address: 'commencement bay', city: 'Tacoma', state: 'WA', zipCode:'',lat:47.2860 ,lng:47.2860 },
      {userId: 2,title: 'Redondo beach is fun to take the family to but also to DIVE', body:'WOW, I can not believe how much life is under the water there. From shallow to deep, all kinds of life. We even see baby octopus every where!!!! Even a SPONGE BOB sitting!!!', address: '', city: 'Redondo', state: 'WA', zipCode:'',lat:33.8492,lng:47.7511 },
      {userId: 1,title: 'Found  a great new dive spot in Hood Canal', body:'It is a good hour drive, but man, the area is not busy and plenty to explore under water. We are going back again next week since we really only got to explore the south end - it is a must see if you want some where different/new to go to.', address:'24281 US-101', city: 'Hood Sport', state: 'WA', zipCode:'98548',lat:47.7506485,lng:-122.7565488 },
   ], {});
  },

  down: (queryInterface, Sequelize) => {
   
     return queryInterface.bulkDelete('Locations', null, {});
  }
};
