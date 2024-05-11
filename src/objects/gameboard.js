const ship = require("../objects/ship");

class GameBoard {
 constructor() {
    this.gameboard = this.createBoard(10);
 }

 
 createBoard(size) {
   let board = []
   
   for(let i = 0; i <= size; i++) {
    board[i] = [];
    for(let j = 0; j <= size; j++) {
        board[i][j] = "o";
    }
   }
   return board;
 }
}

module.exports = GameBoard;