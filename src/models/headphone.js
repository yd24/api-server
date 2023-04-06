'use strict';

const { DataTypes } = require('sequelize');

const Headphone = (sequelize) => sequelize.define('Headphone', {
    model: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.ENUM('On-Ear', 'Over-Ear', 'In-Ear', 'Earbuds'),
        allowNull: false,
    },
    wireless: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = Headphone;