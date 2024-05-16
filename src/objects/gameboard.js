const Ship = require("../objects/ship");

class GameBoard {
 constructor() {
    this.gameboard = this.createBoard(10);
    this.shipsArray = [
      {
        ship1: new Ship("Patrol Boat", 1),
        coordPairs: []
      },
      {
        ship2: new Ship("Submarine", 2),
        coordPairs: []
      },
      {
        ship3: new Ship("Destroyer", 3),
        coordPairs: []
      },
      {
        ship4: new Ship("Battleship", 4),
        coordPairs: []
      },
      {
        ship5: new Ship("Carrier", 5),
        coordPairs: []
      }
    ]
  
 }
  
 createBoard(size) {
   let board = []
   
   for(let i = 0; i < size; i++) {
    board[i] = [];
    for(let j = 0; j < size; j++) {
        board[i][j] = 0;
    }
   }
   return board;
 }
 placeShip(ship,positionX, positionY, direction) {
  if(direction === "H") {
    let columnValid =  true;
    for(let i = positionX; i < positionX + positionY; i++) {
      if(this.board[i][positionY] !== 0 || positionX + ship > 10) {
        columnValid = false;
        break;
      }
    }
    if(columnValid) {
      if(ship === 1 && this.shipsArray[0].coordPairs.length === 0) {
        while( ship !== 0) {
          this.shipsArray[0].coordPairs.push({positionX,positionY})
          this.board[positionX][positionY] = "H";
          positionX++
          ship--
        }
        return this.board
      }
      if(ship === 2 && this.shipsArray[1].coordPairs.length === 0) {
        while(ship !== 0) {
          this.shipsArray[1].coordPairs.push({positionX,positionY})
          this.board[positionX][positionY] = "H";
          positionX++
          ship--
        }
        return this.board;
      }
      if(ship === 3 && this.shipsArray[2].coordPairs.length === 0) {
        while(ship !== 0) {
          this.shipsArray[2].coordPairs.push({positionX,positionY}) 
          this.board[positionX][positionY] = "H"
          positionX++
          ship--
        }
        return this.board
      }
      if(ship === 4) {
        
      }
    }
  }
 }
}

module.exports = GameBoard;