const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const server = require('../../index.js');
const { expect } = chai;

chai.use(chaiHttp);

describe('Testanto integração com api do GitHub', () => {
  describe('GET /avatar', () => {
    let response;

    before(async () => {
      response = await chai.request(server).get('/api/avatar');
    })

    it('Deve retornar status 200', () => {
      expect(response).to.have.status(200);
    })

    it('Deve retornar um objeto no body', () => {
      expect(response.body).to.have.a('object');
    })

    it('Deve retornar a propriedade "avatar" ', () => {
      expect(response.body).to.have.property('avatar');
    })
  });

  describe('GET /api/repo', () => {
    let response;

    before(async () => {
      response = await chai.request(server).get('/api/repo');
    })

    it('Deve retornar status 200', () => {
      expect(response).to.have.status(200);
    })

    it('Deve retornar um Array no body', () => {
      expect(response.body).to.have.a('object');
    })

    it('Deve retornar a propriedade "title" e " subtitle', () => {
      expect(response.body[0]).to.have.property('title');
      expect(response.body[0]).to.have.property('subtitle');
    })
  });
});
