//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();
chai.use(chaiHttp);

describe('/POST executePayment', () => {
    it('it should execute payment request', (done) => {
      let data = {
          sender: "John",
          receiver: "Mike",
          amount: 100
      }
      chai.request("http://payment-execution-service.mybluemix.net")
          .post('/executePayment')
          .send(data)
          .end((err, res) => {
              res.should.have.status(200);
              //res.body.should.be.a('object');
        	  console.log(res.body);
              res.body.should.have.property('msg');
            done();
          });
    });

});