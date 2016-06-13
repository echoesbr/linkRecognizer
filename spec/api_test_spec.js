var request = require("request");
var base_url = "http://localhost:8081/"
var xml_request = '<?xml version="1.0" encoding="UTF-8"?><store id="575b3f393fc3cdc6d3946c03"><item><id>12345</id><title>Produto Legal</title><price>230.00</price><link>http://www.lojadamaria.com.br/perfume-the-one-sport-masculino-edt/t/2/campanha_id/+752+</link></item></store>'

describe("Index of the API", function () {
    describe("GET /", function () {
        it("returns status code 200", function (done) {
            request.get(base_url, function (error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
    });
    describe("POST /url/receive", function () {
        it("returns status code 200", function (done) {
            request.post({
                        url: base_url + 'url/receive',
                        form: {url: 'http://www.lojadojoao.com.br/produto-de-teste-1-16599221', id: '575b3f463fc3cdc6d3946c04'}
                    },
                    function (error, response, body) {
                        expect(response.statusCode).toBe(200);
                        done();
                    }
            )
        });
    });
    describe("POST /xml/receive", function () {
        it("returns status code 200", function (done) {
            request.post({
                        url: base_url + 'xml/receive',
                        headers:{'Content-Type': 'application/xml'},
                        body: xml_request
                    },
                    function (error, response, body) {
                        expect(response.statusCode).toBe(200);
                        done();
                    }
            )
        });
    });
});