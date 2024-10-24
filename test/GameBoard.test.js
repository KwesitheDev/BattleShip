
const GameBoard = require('../src/modules/GameBoard');
const Ship = require('../src/modules/ship');
const jestGlobals = require('@jest/globals');
const { describe, it, expect, beforeEach } = jestGlobals;

describe('GameBoard', () => {
  let gameBoard;

  beforeEach(() => {
    gameBoard = new GameBoard();
  });

  it('should place a ship', () => {
    const ship = new Ship(3);
    gameBoard.placeShip(ship, 1, 1);
    expect(gameBoard.ships.length).toBe(1);
  });

  it('should receive an attack', () => {
    const ship = new Ship(3);
    gameBoard.placeShip(ship, 1, 1);
    gameBoard.receiveAttack(1, 1);
    expect(gameBoard.missedAttacks.length).toBe(0);
    expect(ship.hits).toBe(1);
  });

  it('should miss an attack', () => {
    gameBoard.receiveAttack(1, 1);
    expect(gameBoard.missedAttacks.length).toBe(1);
  });

  it('should check if all ships are sunk', () => {
    const ship1 = new Ship(3);
    const ship2 = new Ship(3);
    gameBoard.placeShip(ship1, 1, 1);
    gameBoard.placeShip(ship2, 2, 2);
    ship1.hit();
    ship1.hit();
    ship1.hit();
    ship2.hit();
    ship2.hit();
    ship2.hit();
    expect(gameBoard.allShipsSunk()).toBe(true);
  });
});
