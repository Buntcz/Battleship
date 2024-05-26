import GameBoard from "./gameboard.js";

export default class Computer {
    constructor(name) {
        this.name = name;
        this.playerBoard = new GameBoard();
        this.computerPastShots = [] // this will store computer's past shots so It does not shoot there again.
        this.placeRandomShips();
    }
    getRandomNum() {
        return Math.floor(Math.random() * 10);
    }
    getRandomX() {
        let X = this.getRandomNum();
        return X;
    }
    getRandomY() {
        let Y = this.getRandomNum();
        return Y;
    }
    getRandomDirection() {
        if(Math.random() < 0.5) {
            return "V"
        } else {
            return "H"
        }
    }
    placeRandomShips() {
        let computerArray = this.playerBoard.shipsArray;
        computerArray.forEach((compShip) => {
            let isShipPlaced = compShip.coordPairs.length
            while(isShipPlaced === 0) {
                let randomDirection = this.getRandomDirection();
                let randomX = this.getRandomX();
                let randomY = this.getRandomY();
                let shipLength = compShip.ship.length;
                this.playerBoard.placeShip(shipLength,randomX,randomY,randomDirection);
                isShipPlaced = compShip.coordPairs.length;
            }
        })
    }
    computerShot(computerTarget) {
        let shotIsPresent = false;
        let attackX = this.getRandomNum();
        let attackY = this.getRandomNum();
        let pairShot = [attackX,attackY];
        if(this.computerPastShots.includes(pairShot)) {
            shotIsPresent = true;
            attackX = this.getRandomNum();
            attackY = this.getRandomNum();       
            pairShot = [attackX, attackY]
         } 
         if(!shotIsPresent) {
          computerTarget.playerBoard.shotFired(attackX,attackY);
          this.computerPastShots.push(pairShot);
         }
    }
}