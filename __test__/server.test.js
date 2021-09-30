'use strict'

const server = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server.app);

// describe('web server', () => {
  
//   it('should respond with a 404 invalid route', () => {

//     return mockRequest
//     .get('/foo')
//     .then(results => {
//         expect(results.status).toBe(404);
//         });
//     });

  // it('should respond with a 500 server error', () => {

  //   return mockRequest
  //   .get('/foobar')
  //   .then(results => {
  //     expect(results.status).toBe(500);
  //   });
  // });  

  // it('should respond with a 404 on an invalid route', async () => {
  //   const response = await mockRequest.get('/foobar');
  //   expect(response.status).toBe(404);
  // });

  describe('API server', () => {
    it('404 on a bad route', async () => {
      const response = await mockRequest.get('/foo');
      expect(response.status).toEqual(404);
    });

});