'use strict';

const logger = require('./logger.js');

xdescribe('Testing logger', () => {
    test('Checking if logger is being called properly and passing to next middleware', () => {
        const request = {
            query: {
                name: 'Jacob',
            },
        };
        const response = {};
        const next = jest.fn();

        logger(request, response, next);
        expect(next).toHaveBeenCalled();
    });
});