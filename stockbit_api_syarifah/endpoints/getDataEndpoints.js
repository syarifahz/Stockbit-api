import supertest from 'supertest';

const env = require('dotenv').config();

const api = supertest(process.env.API_GET_DATA);

export const apiGetData20 =  () => api.get('/beers?page=2&per_page=20')
    .set('Accept','application/json');

export const apiGetData5 =  () => api.get('/beers?page=2&per_page=5')
    .set('Accept','application/json');

export const apiGetData1 =  () => api.get('/beers?page=2&per_page=1')
    .set('Accept','application/json');

export const apiGetData =  () => api.get('/beers')
    .set('Accept','application/json');
