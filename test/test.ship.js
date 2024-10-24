const Ship = require('../src/ship');
const jestGlobals = require('@jest/globals');
const { describe, it, expect, beforeEach } = jestGlobals;

describe('Ship', () => {
  let ship;

  beforeEach(() => {
    ship = new Ship(3);
  });

  it('should hit a ship', () => {
    ship.hit();
    expect(ship.hits).toBe(1);
  });

  it('should sink a ship', () => {
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});
