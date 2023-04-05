'use strict';

const { sequelize } = require('./src/models/index.js');
const Headphone = require('./src/models/headphone.js');
const User = require('./src/models/user.js');

sequelize.sync().then( async() => {
    console.log('Database initialized!');

    let newHeadphone = await Headphone.create({
        model: 'DT1990',
        brand: 'Beyerdynamic',
        type: 'Over-Ear',
        wireless: false,
        weight: 300,
    });

    let newUser = await User.create({
        username: 'admin',
        password: 'banana',
        email: 'admin@me.com',
    });

    console.log(newHeadphone);
    console.log(newUser);

}).catch(error => console.log(error));