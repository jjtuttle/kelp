'use strict';



module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    userId: DataTypes.INTEGER,

    title: DataTypes.STRING,

    body: DataTypes.TEXT,

    address: DataTypes.STRING,

    city: DataTypes.STRING,

    state: DataTypes.STRING,

    zipCode: DataTypes.STRING,

    lat: DataTypes.DECIMAL,

    lng: DataTypes.DECIMAL

  }, {});
  Location.associate = function(models) {
    // associations can be defined here
    Location.belongsTo(models.User, { foreignKey: 'userId' });
    Location.hasMany(models.Review, {foreignKey: 'locationId'});
    Location.hasMany(models.Image, {foreignKey: 'locationId'});
    // // For deleting a review that a user did to a location 
    // Location.hasMany(models.Location, { foreignKey: 'locationId', onDelete: 'CASCADE'});
    
  };
  return Location;
};