'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    body: DataTypes.TEXT
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, { foreignKey: 'userId' });
    Review.belongsTo(models.Location, { foreignKey: 'locationId', onDelete: 'CASCADE' });
  };
  return Review;
};