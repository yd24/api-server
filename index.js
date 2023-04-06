'use strict';

require('dotenv').config();
const server = require('./src/server');
const { sequelize } = require('./src/models/index.js');

const PORT = process.env.PORT || 3001;

sequelize.sync().then(() => {
    server.start(PORT);
}).catch(error => console.log('SQL connection error', error));