var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var chaiHttp = require('chai-http');

chai.use(chaiHttp);
var url = 'http://preview.airwallex.com:30001';
  
describe('Site is up', function() {
  it('should be there', function(done) {
    chai.request(url)
      .get('/bank')
      .end(function(err, res) {
        if (err) {
          throw err;
	}

	res.should.have.status(404);
	done();
      });
  });
});

describe('POSITIVE cases', function() {
  it('correct form SWIFT', function(done) {
    chai.request(url)
      .post('/bank')
      .send({
        "payment_method": "SWIFT",
        "bank_country_code": "US",
        "account_name": "John Smith",
	"account_number": "123",
        "swift_code": "ICBCUSBJ",
        "aba": "11122233A"
      })
      .end(function(err, res) {
        res.should.have.status(200);
        expect(res.body.success).to.equal("Bank details saved");
        //console.log(res.body);
        done();
      });
  });

  it('correct form LOCAL', function(done) {
    chai.request(url)
      .post('/bank')
      .send({
        "payment_method": "LOCAL",
        "bank_country_code": "US",
        "account_name": "John Smith",
	"account_number": "123",
        //"swift_code": "ICBCUSBJ",
        "aba": "11122233A"
      })
      .end(function(err, res) {
        res.should.have.status(200);
        expect(res.body.success).to.equal("Bank details saved");
        //console.log(res.body);
        done();
      });
  });
});

describe('PAYMENT METHOD negative cases', function() {
  it('payment method missing', function(done) {
    chai.request(url)
      .post('/bank')
      .send({
        //"payment_method": "SWIFT",
        "bank_country_code": "US",
        "account_name": "John Smith",
	"account_number": "123",
        "swift_code": "ICBCUSBJ",
        "aba": "11122233A"
      })
      .end(function(err, res) {
        res.should.have.status(400);
        expect(res.body.error).to.equal("'payment_method' field required, the value should be either 'LOCAL' or 'SWIFT'");
        //console.log(res.body);
        done();
      });
  });

  it('payment method wrong', function(done) {
    chai.request(url)
      .post('/bank')
      .send({
        "payment_method": "SWIF",
        "bank_country_code": "US",
        "account_name": "John Smith",
	"account_number": "123",
        "swift_code": "ICBCUSBJ",
        "aba": "11122233A"
      })
      .end(function(err, res) {
        res.should.have.status(400);
        expect(res.body.error).to.equal("'payment_method' field required, the value should be either 'LOCAL' or 'SWIFT'");
        //console.log(res.body);
        done();
      });
  });
});

describe('BANK COUNTRY CODE negative cases', function() {
  it('missing country code', function(done) {
    chai.request(url)
      .post('/bank')
      .send({
        "payment_method": "SWIFT",
        //"bank_country_code": "AU",
        "account_name": "John Smith",
	"account_number": "123",
        "swift_code": "ICBCUSBJ",
        "aba": "11122233A"
      })
      .end(function(err, res) {
        res.should.have.status(400);
        expect(res.body.error).to.equal("'bank_country_code' is required, and should be one of 'US', 'AU', or 'CN'");
        //console.log(res.body);
        done();
      });
  });

  it('wrong country code', function(done) {
    chai.request(url)
      .post('/bank')
      .send({
        "payment_method": "SWIFT",
        "bank_country_code": "AX",
        "account_name": "John Smith",
	"account_number": "123",
        "swift_code": "ICBCUSBJ",
        "aba": "11122233A"
      })
      .end(function(err, res) {
        res.should.have.status(400);
        expect(res.body.error).to.equal("'bank_country_code' is required, and should be one of 'US', 'AU', or 'CN'");
        //console.log(res.body);
        done();
      });
  });
});

describe('ACCOUNT NAME negative cases', function() {
  it('missing account name', function(done) {
    chai.request(url)
      .post('/bank')
      .send({
        "payment_method": "SWIFT",
        "bank_country_code": "US",
        //"account_name": "John Smith",
	"account_number": "123",
        "swift_code": "ICBCUSBJ",
        "aba": "11122233A"
      })
      .end(function(err, res) {
        res.should.have.status(400);
	expect(res).to.be.json;
	expect(res.body.error).to.equal("'account_name' is required");
        //console.log(res.body);
        done();
      });
  })
  
  it('account name length beyond 2-10 (length == 11)', function(done) {
    chai.request(url)
      .post('/bank')
      .send({
        "payment_method": "SWIFT",
        "bank_country_code": "US",
        "account_name": "John Smith_", // 11 characters
	"account_number": "123",
        "swift_code": "ICBCUSBJ",
        "aba": "11122233A"
      })
      .end(function(err, res) {
        res.should.have.status(400);
	expect(res).to.be.json;
	expect(res.body.error).to.equal("Length of account_name should be between 2 and 10");
        //console.log(res.body);
        done();
      });
  });;
  
  it('account name length beyond 2-10 (length == 1)', function(done) {
    chai.request(url)
      .post('/bank')
      .send({
        "payment_method": "SWIFT",
        "bank_country_code": "US",
        "account_name": "J", // 1 characters
	"account_number": "123",
        "swift_code": "ICBCUSBJ",
        "aba": "11122233A"
      })
      .end(function(err, res) {
        res.should.have.status(400);
	expect(res).to.be.json;
	expect(res.body.error).to.equal("Length of account_name should be between 2 and 10");
        //console.log(res.body);
        done();
      });
  });
});

describe('ACCOUNT NUMBER negative cases', function() {
  it('missing account number', function(done) {
    chai.request(url)
      .post('/bank')
      .send({
        "payment_method": "SWIFT",
        "bank_country_code": "US",
        "account_name": "John Smith",
	//"account_number": "123",
        "swift_code": "ICBCUSBJ",
        "aba": "11122233A"
      })
      .end(function(err, res) {
        res.should.have.status(400);
	expect(res).to.be.json;
	expect(res.body.error).to.equal("'account_number' is required");
        //console.log(res.body);
        done();
      });
  });

  it('Length of account number 1-17 when country is US', function(done) {
    chai.request(url)
      .post('/bank')
      .send({
        "payment_method": "SWIFT",
        "bank_country_code": "US",
        "account_name": "John Smith",
	"account_number": "123456789012345678", // 18 characters
        "swift_code": "ICBCUSBJ",
        "aba": "11122233A"
      })
      .end(function(err, res) {
        res.should.have.status(400);
	expect(res).to.be.json;
	expect(res.body.error).to.equal("Length of account_number should be between 1 and 17 when bank_country_code is 'US'");
        //console.log(res.body);
	done();
      });
  })

  it('Length of account number 6-9 when country is AU (5 char)', function(done) {
    chai.request(url)
      .post('/bank')
      .send({
        "payment_method": "SWIFT",
        "bank_country_code": "AU",
        "account_name": "John Smith",
	"account_number": "12345", // 5 characters
        "swift_code": "ICBCAUBJ",
        "aba": "11122233A"
      })
      .end(function(err, res) {
        res.should.have.status(400);
	expect(res).to.be.json;
	expect(res.body.error).to.equal("Length of account_number should be between 6 and 9 when bank_country_code is 'AU'");
        //console.log(res.body);
	done();
      });
  });;

  it('Length of account number 6-9 when country is AU (10 char)', function(done) {
    chai.request(url)
      .post('/bank')
      .send({
        "payment_method": "SWIFT",
        "bank_country_code": "AU",
        "account_name": "John Smith",
	"account_number": "1234567890", // 10 characters
        "swift_code": "ICBCAUBJ",
        "aba": "11122233A",
	"bsb": "123456"
      })
      .end(function(err, res) {
        res.should.have.status(400);
	expect(res).to.be.json;
	expect(res.body.error).to.equal("Length of account_number should be between 6 and 9 when bank_country_code is 'AU'");
        //console.log(res.body);
	done();
      });
  })

  it('Length of account number 8-20 when country is CN (7 char)', function(done) {
    chai.request(url)
      .post('/bank')
      .send({
        "payment_method": "SWIFT",
        "bank_country_code": "CN",
        "account_name": "John Smith",
	"account_number": "1234567", // 7 char
        "swift_code": "ICBCCNBJ",
        "aba": "11122233A"
      })
      .end(function(err, res) {
        res.should.have.status(400);
	expect(res).to.be.json;
	expect(res.body.error).to.equal("Length of account_number should be between 8 and 20 when bank_country_code is 'CN'");
        //console.log(res.body);
	done();
      });
  });;

  it('Length of account number 8-20 when country is CN (21 char)', function(done) {
    chai.request(url)
      .post('/bank')
      .send({
        "payment_method": "SWIFT",
        "bank_country_code": "CN",
        "account_name": "John Smith",
	"account_number": "123456789012345678901", // 21 char
        "swift_code": "ICBCCNBJ",
        "aba": "11122233A"
      })
      .end(function(err, res) {
        res.should.have.status(400);
	expect(res).to.be.json;
	expect(res.body.error).to.equal("Length of account_number should be between 8 and 20 when bank_country_code is 'CN'");
        //console.log(res.body);
	done();
      });
  });

});

describe('SWIFT CODE negative cases', function() {
  it('swift code missing when payment method is SWIFT', function(done) {
    chai.request(url)
      .post('/bank')
      .send({
        "payment_method": "SWIFT",
        "bank_country_code": "US",
        "account_name": "John Smith",
	"account_number": "123",
        //"swift_code": "ICBCUSBJ",
        "aba": "11122233A"
      })
      .end(function(err, res) {
        res.should.have.status(400);
        expect(res.body.error).to.equal("'swift_code' is required when payment method is 'SWIFT'");
        //console.log(res.body);
        done();
      });
  });

  it('swift code wrong for the given bank country code', function(done) {
    chai.request(url)
      .post('/bank')
      .send({
        "payment_method": "SWIFT",
        "bank_country_code": "US",
        "account_name": "John Smith",
	"account_number": "123",
        "swift_code": "ICBCAUBJ",
        "aba": "11122233A"
      })
      .end(function(err, res) {
        res.should.have.status(400);
        expect(res.body.error).to.equal("The swift code is not valid for the given bank country code: US");
        //console.log(res.body);
        done();
      });
  })

  it('swift code should be either 8 or 11 characters (10 char)', function(done) {
    chai.request(url)
      .post('/bank')
      .send({
        "payment_method": "SWIFT",
        "bank_country_code": "US",
        "account_name": "John Smith",
	"account_number": "123",
        "swift_code": "ICBCUSBJJJ", // length=10
        "aba": "11122233A"
      })
      .end(function(err, res) {
        res.should.have.status(400);
        expect(res.body.error).to.equal("Length of 'swift_code' should be either 8 or 11");
        //console.log(res.body);
        done();
      });
  });;

  it('swift code should be either 8 or 11 characters (12 char)', function(done) {
    chai.request(url)
      .post('/bank')
      .send({
        "payment_method": "SWIFT",
        "bank_country_code": "US",
        "account_name": "John Smith",
	"account_number": "123",
        "swift_code": "ICBCUSBJJJJJ", // length=12
        "aba": "11122233A"
      })
      .end(function(err, res) {
        res.should.have.status(400);
        expect(res.body.error).to.equal("Length of 'swift_code' should be either 8 or 11");
        //console.log(res.body);
        done();
      });
  });
});

describe('BSB negative cases', function() {
  it('mandatory when bank country is AU', function(done) {
    chai.request(url)
      .post('/bank')
      .send({
        "payment_method": "SWIFT",
        "bank_country_code": "AU",
        "account_name": "John Smith",
	"account_number": "123456",
        "swift_code": "ICBCAUBJ",
        "aba": "11122233A",
	//"bsb": "123456"
      })
      .end(function(err, res) {
        res.should.have.status(400);
        expect(res.body.error).to.equal("'bsb' is required when bank country code is 'AU'");
        //console.log(res.body);
        done();
      });
  })

  it('6 characters (5 char)', function(done) {
    chai.request(url)
      .post('/bank')
      .send({
        "payment_method": "SWIFT",
        "bank_country_code": "AU",
        "account_name": "John Smith",
	"account_number": "123456",
        "swift_code": "ICBCAUBJ",
        "aba": "11122233A",
	"bsb": "12345"
      })
      .end(function(err, res) {
        res.should.have.status(400);
        expect(res.body.error).to.equal("Length of 'bsb' should be 6");
        //console.log(res.body);
        done();
      });
  });;

  it('6 characters (7 char)', function(done) {
    chai.request(url)
      .post('/bank')
      .send({
        "payment_method": "SWIFT",
        "bank_country_code": "AU",
        "account_name": "John Smith",
	"account_number": "123456",
        "swift_code": "ICBCAUBJ",
        "aba": "11122233A",
	"bsb": "1234567"
      })
      .end(function(err, res) {
        res.should.have.status(400);
        expect(res.body.error).to.equal("Length of 'bsb' should be 6");
        //console.log(res.body);
        done();
      });
  });
});

describe('ABA negative cases', function() {
  it('mandatory when bank country is US', function(done) {
    chai.request(url)
      .post('/bank')
      .send({
        "payment_method": "SWIFT",
        "bank_country_code": "US",
        "account_name": "John Smith",
	"account_number": "123456",
        "swift_code": "ICBCUSBJ",
        //"aba": "11122233A",
	//"bsb": "123456"
      })
      .end(function(err, res) {
        res.should.have.status(400);
        expect(res.body.error).to.equal("'aba' is required when bank country code is 'US'");
        //console.log(res.body);
        done();
      });
  });

  it('9 characters (10 char)', function(done) {
    chai.request(url)
      .post('/bank')
      .send({
        "payment_method": "SWIFT",
        "bank_country_code": "US",
        "account_name": "John Smith",
	"account_number": "123456",
        "swift_code": "ICBCUSBJ",
        "aba": "11122233A_", // 10 char
	"bsb": "12345"
      })
      .end(function(err, res) {
        res.should.have.status(400);
        expect(res.body.error).to.equal("Length of 'aba' should be 9");
        //console.log(res.body);
        done();
      });
  });
});
