import request from 'supertest';
import server from '../../app';
import { Stay } from '../../models/stay';
import { signup } from '../../test/signup';

describe('/api/stays/:id GET', () => {
  it('returns a 404 if the stay is not found', async () => {
    const response = await request(server).get('/api/stays/1').send({});
    console.log('response', response.body);
    expect(response.status).toEqual(404);
  });

  it('returns the stay if the stay is found', async () => {
    const title = 'Title stay';
    const price = 80;
    const cookie = signup();

    const response = await request(server)
      .post('/api/stays')
      .set('Cookie', cookie)
      .send({
        title,
        price,
      });

    const ticketResponse = await request(server)
      .get(`/api/stays/${response.body.id}`)
      .send();

    expect(ticketResponse.body).toBeDefined();
  });

  it('returns the corret title of the stay which was queried', async () => {
    const title = 'Title stay';
    const price = 80;
    const cookie = signup();

    const response = await request(server)
      .post('/api/stays')
      .set('Cookie', cookie)
      .send({
        title,
        price,
      });

    const ticketResponse = await request(server)
      .get(`/api/stays/${response.body.id}`)
      .send();

    expect(ticketResponse.body.title).toEqual('Title stay');
  });

  it('returns the corret price of the stay which was queried', async () => {
    const title = 'Title stay';
    const price = 80;
    const cookie = signup();

    const response = await request(server)
      .post('/api/stays')
      .set('Cookie', cookie)
      .send({
        title,
        price,
      });

    const ticketResponse = await request(server)
      .get(`/api/stays/${response.body.id}`)
      .send();

    expect(ticketResponse.body.price).toEqual(80);
  });
});
