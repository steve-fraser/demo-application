process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();


chai.use(chaiHttp);

describe('API', () => {
  /*
  * Test the /POST route
  */
  describe('/POST submit', () => {
      it('HTTP Post to submit how many chuck', (done) => {
          let body = {
              numberOfChucks: 5
          }
        chai.request(server)
            .post('/submit')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send(body)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.text.should.have.match(/(?:numberOfChucks = "5")/)
              done();
            });
      });
  });
});
