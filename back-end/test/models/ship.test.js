'use strict';

const expect = require('chai').expect;

describe('models/ship_type', function () {
  before(async function () {
    console.log('before');
    await require('../../models').sequelize.sync();
    this.ship_type = require('../../models').ship_type;
    await this.ship_type.destroy({
      where: {
        ship_subtype: 'test_ship_subtype'
      }
    });
  });

  beforeEach(async function () {
    this.ship_type = require('../../models').ship_type;
    console.log('beforeEach');
  });

  describe('create', function () {
    it('creates a ship_type', async function () {
      const result = await this.ship_type.create({
        ship_type: 'test_ship_type',
        ship_subtype: 'test_ship_subtype',
      });
      expect(result.ship_type).to.be.equal('test_ship_type');
      expect(result.ship_subtype).to.be.equal('test_ship_subtype');
    });
  });
});
