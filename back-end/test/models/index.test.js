'use strict';

const expect = require('chai').expect;

describe('models/index', function () {
  it('returns the ship_type model', function () {
    var models = require('../../models');
    expect(models.ship_type).to.be.ok;
  });
  it('returns the ship model', function () {
    var models = require('../../models');
    expect(models.ship).to.be.ok;
  });
  it('returns the ship_card model', function () {
    var models = require('../../models');
    expect(models.ship_card).to.be.ok;
  });
});
