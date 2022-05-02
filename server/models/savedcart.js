'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SavedCart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SavedCart.init({
    Name: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    content: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'SavedCart',
  });
  return SavedCart;
};