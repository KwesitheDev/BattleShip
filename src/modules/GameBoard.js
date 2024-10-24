
class GameBoard {
  constructor() {
    this.ships = [];
    this.missedAttacks = [];
  }

  placeShip(ship, x, y) {
    this.ships.push({
      ship,
      x,
      y
    });
  }

  receiveAttack(x, y) {
    const ship = this.ships.find(s => s.x === x && s.y === y);
    if (ship) {
      ship.ship.hit();
    } else {
      this.missedAttacks.push([x, y]);
    }
  }

  allShipsSunk() {
    return this.ships.every(s => s.ship.isSunk());
  }
}

module.exports = GameBoard;
