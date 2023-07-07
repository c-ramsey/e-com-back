const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Product = require('./product');

class Tag extends Model {}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

Tag.belongsToMany(Product, {
  through: 'product_tag',
  foreignKey: 'tag_id',
});

module.exports = Tag;
