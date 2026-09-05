const request = require('supertest');
const app = require('../app.js');

describe('GET /', () => {
    it('should return a JSON response with a welcome message', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({message: "Hello World"});
    });
});