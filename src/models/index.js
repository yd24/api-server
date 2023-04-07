'use strict';

require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');
const db_url = process.env.DB_URL || 'sqlite:memory:';
const sequelize = new Sequelize(db_url);
const Collection = require('../lib/Collection');

const createHeadphone = require('./headphone');
const HeadphoneModel = createHeadphone(sequelize);

const createUser = require('./user');
const UserModel = createUser(sequelize);

//establish relationships
HeadphoneModel.belongsToMany(UserModel, {through: 'UserHeadphones'});
UserModel.belongsToMany(HeadphoneModel, {through: 'UserHeadphones'});

module.exports = {
    sequelize, 
    Headphone: HeadphoneModel,
    User: UserModel,
};