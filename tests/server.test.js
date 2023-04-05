'use strict';

const supertest = require('supertest');
const server = require('../src/server');
const request = supertest(server.app);

describe('Test that API server is functioning', () => {
    test('Should get all headphones in db', async () => {
        let resp = await request.get('/headphone');
        console.log(resp.body.length);
        expect(resp.body.length).toEqual(3);
    });

    test('Should get all users in db', async () => {
        let resp = await request.get('/user');
        console.log(resp.body.length);
        expect(resp.body.length).toEqual(3);
    });
});