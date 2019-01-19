'use strict';
module.exports = (sequelize, DataTypes) => {
  const Loan = sequelize.define('Loan', {
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    
    id: DataTypes.INTEGER,
    patron_id: DataTypes.INTEGER,
    book_id: DataTypes.INTEGER,
    loaned_on: DataTypes.DATE,
    return_by: DataTypes.DATE,
    returned_on: DataTypes.DATE
  }, {});
  Loan.associate = function(models) {
    // associations can be defined here
  };
  return Loan;
};