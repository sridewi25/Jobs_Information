'use strict';
const {encryptPassword} = require('../helpers/bcrypt')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    name: {
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          message:"Name must not be empty!"
        }

      }
    },
    email: {
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          message:"Email must not be empty!"
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          message:"Username must not be empty!"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          message:"Password must not be empty!"
        }
      }
    },
    country:{
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          message:"Country must not be empty!"
        }
      }
    },
    gender:{
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          message:"Gender must not be empty!"
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: function(user, options){
        user.password=encryptPassword(user.password)
      }

    },
    sequelize,
    modelName: 'user',
  });
  return user;
};