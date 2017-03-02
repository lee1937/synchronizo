var request = require('supertest');
var should = require('should');
var formidable = require('formidable');

/*
 * Potentially use https://goo.gl/7cU0rv for upload.js script
 * details helpful usage of browser variable. Once tests are written,
 * move /javascripts to /controllers
 */

describe('loading upload', function () {
    var server;
    beforeEach(function () {
        server = require('../server');
    });
    afterEach(function () {
        server.close();
    });
    it('upload exists', function testUploadPage(done) {
        request(server)
        .get('/upload')
        .expect(200, done);
    });
    it('simple uploadPing', function testSimpleUploadPing(done) {
        request(server)
            .post('/upload_endpoint')
            .expect(200, done);
    });
    // TODO: Add more complicated test cases
    // jQuery should be helpful for making them
});
