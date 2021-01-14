import * as dotenv from 'dotenv';
import * as DateLib from '../src/index';
import * as chai from 'chai';

describe('Test helloWorld', function () {
  dotenv.config();
  const { expect } = chai;

  this.timeout(20000);

  context('helloWorld', function () {
    it('helloWorld Test', async function () {
      // Arrange

      // Act
      const res = DateLib.helloWorld();

      // Assert
      expect(res, 'response').to.eq('hello world');
    });
  });
});
