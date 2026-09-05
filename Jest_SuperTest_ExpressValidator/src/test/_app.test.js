const request = require('supertest');
const app = require('../app.js');

describe('GET /', () => {
    it('should return a JSON response with a welcome message', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({message: "Hello World"});
    });
});

describe('POST /register', () => {
    it('should return validation errors for invalid user data', async () => {
        const response = await request(app)
            .post('/register')
            .send({username: 123, email: 'test', password: 'test'});

        expect(response.status).toBe(400);
        expect(response.body.errors).toEqual(expect.arrayContaining([
            expect.objectContaining({
                msg: 'Username must be string',
                path: 'username',
                location: 'body'
            }),
            expect.objectContaining({
                msg: 'Invalid email address',
                path: 'email',
                location: 'body'
            }),
            expect.objectContaining({
                msg: 'Password must be atleast 6 characters long',
                path: 'password',
                location: 'body'
            })
        ]));
    });
});