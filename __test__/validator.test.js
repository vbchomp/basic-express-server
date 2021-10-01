'use strict'

const { validator } = require('../src/middleware/validator.js');
const supertest = require('supertest');
const mockRequest = supertest(validator);

describe('valid name query', () => {
  
  it('should respond with a name', () => {

    return mockRequest
    .get('/person?name')
    .then(results => {
        expect(results.status).toBe(200);

        });
    })
})