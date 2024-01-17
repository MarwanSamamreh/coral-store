import {  DataTypes } from 'sequelize';
import { sequelize } from "../config/database";
import { ProductsModel } from './products';


export const ReviewsModel = sequelize.define('reviews', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

ReviewsModel.hasOne(ProductsModel,{foreignKey:"id"});
ProductsModel.hasMany(ReviewsModel,{foreignKey:"product_id"})