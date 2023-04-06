'use strict';

const supertest = require('supertest');
const server = require('../src/server');
const request = supertest(server.app);

describe('Test that API server is functioning', () => {
    test('Should get all headphones in db', async () => {
        let resp = await request.get('/headphone');
        console.log(resp.body.length);
        expect(resp.body.length).toEqual(1);
    });

    test('Should get all users in db', async () => {
        let resp = await request.get('/user');
        console.log(resp.body.length);
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