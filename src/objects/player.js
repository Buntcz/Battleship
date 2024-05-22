import GameBoard from "./gameboard";

export default class Player {
    constructor(name) {
        this.name = name
        this.playerBoard = new GameBoard();
    }
    placePlayerShip(playerL,playerX,playerY,playerD) {
        this.playerBoard.placeShip(playerL,playerX,playerY,playerD)
        let placedShips = this.playerBoard.shipsArray.filter((ship) => 
            ship.coordPairs.length > 0
        )
    }
    shoot(enemyBoard,enemyX,enemyY) {
        enemyBoard.playerBoard.shotFired(enemyX,enemyY)
    }
}