'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,

    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    genre: DataTypes.STRING,
    first_published: DataTypes.INTEGER
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
  };
  return Book;
};