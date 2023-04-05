'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite:memory:');

module.exports = { sequelize, DataTypes };