'use strict';

const supertest = require('supertest');
const server = require('../src/server');
const request = supertest(server.app);

describe('Test that API GET routes are working', () => {
    test('Should get all headphones in db', async () => {
        let resp = await request.get('/headphone');
        expect(resp.body.length).toEqual(1);
    });

    test('Should get all users in db', async () => {
        let resp = await request.get('/user');
        expect(resp.body.length).toEqual(1);
    });

    test('Should get a specific headphone in db', async () => {
        let id = 4;
        let resp = await request.get(`/headphone/${id}`);
        expect(resp.body.id).toEqual(4);
    });

    test('Should get a specific user in db', async () => {
        let id = 4;
        let resp = await request.get(`/user/${id}`);
        expect(resp.body.id).toEqual(4);
    });
});

describe('Test that API POST routes are working', () => {
    test('Should create a headphone in the database', async () => {
        let data = {
            model: 'Sundara',
            brand: 'Hifiman',
            type: 'Over-Ear',
            wireless: false,
            weight: 350,
        };

        let resp = await request.post('/headphone').send(data);
        console.log(resp.body);
        let respData = {
            model: resp.body.model,
            brand: resp.body.brand,
            type: resp.body.type,
            wireless: resp.body.wireless,
            weight: resp.body.weight,
        };

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

        expect(respData).toEqual(data);
    });
});