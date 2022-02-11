// const { locations } = require('./models');


// async function getLocations() {
//     return await Location.findAll({include: Image});
// };

// async function addLocation(details) {
//     const loc = await Location.create({
//         ...details
//     });
//     return await Location.findByPk(location.id);
// };

// async function deleteLocation(locationId) {
//     const loc = await Location.findByPk(locationId);
//     if(!loc) throw new Error('*** Cannot find location *** ');

//     await Location.destroy({where: {id: location.id }});
//     return location.id;
// };

// async function updateLocation(details) {
//     const id = details.id;
//     delete details.id;
//     console.log({details, id});

//     await Location.update(
//         details,
//         {
//             where: { id },
//             returning: true,
//             plain: true,
//         }
//     );
//     return await Location.findByPk(id);
// };


// module.exports = {
//     getLocations,
//     addLocation,
//     deleteLocation,
//     updateLocation
// };