'use strict';

const { sequelize, DataTypes } = require('./index');

const Headphone = sequelize.define('Headphone', {
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