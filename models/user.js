'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    
    user.hasMany(models.tournament, {
      foreignKey:'adminId'
    });
  };
  return user;
};