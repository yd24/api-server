'use strict';

require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_URL);

module.exports = { sequelize, DataTypes };