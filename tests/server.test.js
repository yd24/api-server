'use strict';

const supertest = require('supertest');
const server = require('../src/server');
const request = supertest(server.app);
const { sequelize, Headphone, User } = require('../src/models/');

beforeAll( async() => {
    await sequelize.sync();
    let hp_data1 = {
        model: 'Sundara',
        brand: 'Hifiman',
        type: 'Over-Ear',
        wireless: false,
        weight: 350,
    };

    let hp_data2 = {
        model: 'DT1990',
        brand: 'Beyerdynamic',
        type: 'Over-Ear',
        wireless: false,
        weight: 300,
    };

    let hp_data3 = {
        model: 'HD560S',
        brand: 'Sennheiser',
        type: 'Over-Ear',
        wireless: false,
        weight: 250,
    };

    await Headphone.create(hp_data1);
    await Headphone.create(hp_data2);
    await Headphone.create(hp_data3);

    let user_data = {
        username: 'test',
        password: 'banana',
        email: 'test@test.com',
    };

    let user_data2 = {
        username: 'test2',
        password: 'bigchungus5',
        email: 'test2@test.com',
    };

    let user_data3 = {
        username: 'test3',
        password: 'orange4',
        email: 'test3@test.com',
    };

    await User.create(user_data);
    await User.create(user_data2);
    await User.create(user_data3);
});

afterAll( async() => {
    await sequelize.drop();
});

describe('Test that GET routes are working', () => {
    test('Should get all headphones in db', async () => {
        let resp = await request.get('/headphone');

        expect(resp.status).toEqual(200);
        expect(Array.isArray(resp.body) && resp.body.length > 0).toBeTruthy();
    });

    test('Should get all users in db', async () => {
        let resp = await request.get('/user');

        expect(resp.status).toEqual(200);
        expect(Array.isArray(resp.body) && resp.body.length > 0).toBeTruthy();
    });

    test('Should get a specific headphone in db', async () => {
        let id = 3;
        let resp = await request.get(`/headphone/${id}`);

        expect(resp.status).toEqual(200);
        expect(resp.body.id).toEqual(3);
    });

    test('Should get a specific user in db', async () => {
        let id = 3;
        let resp = await request.get(`/user/${id}`);

        expect(resp.status).toEqual(200);
        expect(resp.body.id).toEqual(3);
    });
});

describe('Test that POST routes are working', () => {
    test('Should create a headphone in the database', async () => {
        let data = {
            model: 'Sundara',
            brand: 'Hifiman',
            type: 'Over-Ear',
            wireless: false,
            weight: 350,
        };

        let resp = await request.post('/headphone').send(data);

        let respData = {
            model: resp.body.model,
            brand: resp.body.brand,
            type: resp.body.type,
            wireless: resp.body.wireless,
            weight: resp.body.weight,
        };

        expect(resp.status).toEqual(200);
        expect(respData).toEqual(data);
    });

    test('Should create a user in the database', async () => {
        let data = {
            username: 'test',
            password: 'banana',
            email: 'test@test.com',
        };

        let resp = await request.post('/user').send(data);

        let respData = {
            username: resp.body.username,
            password: resp.body.password,
            email: resp.body.email,
        };

        expect(resp.status).toEqual(200);
        expect(respData).toEqual(data);
    });
});

describe('Test that PUT routes are working', () => {
    test('Should update a headphone in the database', async () => {
        let id = 3;

        let toUpdate = await request.get(`/headphone/${id}`);
        let weight = toUpdate.body.weight;
        toUpdate.body.weight = toUpdate.body.weight + 1;
        weight++; 

        await request.put(`/headphone/${id}`).send(toUpdate.body);
        let resp = await request.get(`/headphone/${id}`);

        expect(resp.status).toEqual(200);
        expect(resp.body.weight).toEqual(weight);
    });

    test('Should update a user in the database', async () => {
        let id = 3;

        let toUpdate = await request.get(`/user/${id}`);
        let email = toUpdate.body.email;
        toUpdate.body.email = toUpdate.body.email + '@';
        email = email + '@'; 

        await request.put(`/user/${id}`).send(toUpdate.body);
        let resp = await request.get(`/user/${id}`);

        expect(resp.status).toEqual(200);
        expect(resp.body.email).toEqual(email);
    });
});

describe('Test that DELETE routes are working', () => {
    test('Should delete a headphone in the database', async () => {
        let data = {
            model: 'HD560S',
            brand: 'Sennheiser',
            type: 'Over-Ear',
            wireless: false,
            weight: 250,
        };
        let resp = await request.post('/headphone').send(data);
        let id = resp.body.id;
        await request.delete(`/headphone/${id}`);
        let resp2 = await request.get(`/headphone/${id}`);
        expect(resp2.status).toEqual(200);
        expect(resp2.body).toEqual(null);
    });

    test('Should delete a user in the database', async () => {
        let data = {
            username: 'test2',
            password: 'dankmemes',
            email: 'test2@working.com',
        };
        let resp = await request.post('/user').send(data);
        let id = resp.body.id;
        await request.delete(`/user/${id}`);
        let resp2 = await request.get(`/user/${id}`);
        expect(resp2.status).toEqual(200);
        expect(resp2.body).toEqual(null);
    });
});

describe('Test that error handlers for routes are working', () => {
    test('Should return a 404 for bad method', async () => {
        let resp = await request.put('/headphone');
        let resp2 = await request.put('/user');
        let resp3 = await request.delete('/headphone');
        let resp4 = await request.delete('/user');
        expect(resp.status).toEqual(404);
        expect(resp2.status).toEqual(404);
        expect(resp3.status).toEqual(404);
        expect(resp4.status).toEqual(404);
    });

    test('Should return a 404 for bad route', async () => {
        let resp = await request.get('/somewhere');
        let resp2 = await request.get('/dinosaur');
        let resp3 = await request.get('/');
        expect(resp.status).toEqual(404);
        expect(resp2.status).toEqual(404);
        expect(resp3.status).toEqual(404);
    });
});