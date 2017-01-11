'use strict';
var path = require('path');
var http = require('http');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var server = require('../generators/app/templates/server/server');

describe('generator-micro-rest:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({service: 'service0'})
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      'package.json'
    ]);
  });
});

describe('server', function () {
  before(function () {
    server.listen(3000);
  });

  after(function () {
    server.close();
  });
});

describe('response', function () {
  it('should return 200', function (done) {
    http.get('http://localhost:3000/echo/awesome', function (res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});
