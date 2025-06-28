import request from 'supertest';
import app from '../src/index';

jest.mock('redis'); // <- Important to activate mock

describe('Auth API', () => {
  it('should login successfully', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({ userId: 'user123' });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('accessToken');
  });
});
