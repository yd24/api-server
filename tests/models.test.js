'use strict';

const { sequelize, Headphone, User} = require('../src/models/');

beforeAll( async() => {
    await sequelize.sync();
});

afterAll( async() => {
    await sequelize.drop();
});

let newUser, newHeadphone;

describe('Testing Headphone/User models', () => {
    test('Can create a Headphone', async() => {
        let data = {
            model: 'Sundara',
            brand: 'Hifiman',
            type: 'Over-Ear',
            wireless: false,
            weight: 350,
        };
        newHeadphone = await Headphone.create(data);

        expect(newHeadphone.model).toEqual('Sundara');
        expect(newHeadphone.id).toBeTruthy();
    });
    
    test('Can create a User', async() => {
        let data = {
            username: 'banana',
            password: 'password',
            email: 'banana@banana.com',
        };
        newUser = await User.create(data);
        await newUser.addHeadphone(newHeadphone);

        expect(newUser.username).toEqual('banana');
        expect(newUser.id).toBeTruthy();
    });

    test('Can get User and their Headphone', async() => {
        let user = await User.findOne({where: {id: newUser.id}, include: Headphone});
        
        expect(user.Headphones[0].model).toEqual('Sundara');
    });
});