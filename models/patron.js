'use strict';
module.exports = (sequelize, DataTypes) => {
  const Patron = sequelize.define('Patron', {
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    
    id: DataTypes.INTEGER,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    library_id: DataTypes.STRING,
    zip_code: DataTypes.STRING
  }, {});
  Patron.associate = function(models) {
    // associations can be defined here
  };
  return Patron;
};