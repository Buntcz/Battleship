 import Ship from "./ship.js"

export default class GameBoard {
 constructor() {
    this.board = this.createBoard(10);
    this.shipsArray = [
      {
        ship: new Ship(1,"Patrol Boat"),
        coordPairs: []
      },
      {
        ship: new Ship(2,"Submarine"),
        coordPairs: []
      },
      {
        ship: new Ship(3,"Destroyer"),
        coordPairs: []
      },
      {
        ship: new Ship(4,"Battleship"),
        coordPairs: []
      },
      {
        ship: new Ship(5,"Carrier"),
        coordPairs: []
      }
    ]
  this.hitCoords = {
    missedHits: [ ],
    shipHits: [ ],
  }
  this.allSunk = false;
 }
  
 createBoard(size) {
   let board = []
   
   for(let i = 0; i < size; i++) {
    board[i] = [];
    for(let j = 0; j < size; j++) {
        board[i][j] = 'o';
    }
   }
   return board;
 }
 placeShip(ship,positionX, positionY, direction) {
  if(direction === "H") {
    let columnValid =  true;
    for(let i = positionX; i < positionX + ship; i++) {
      if(this.board[i][positionY] !== "o" || positionX + ship > 10) {
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
      if(ship === 4 && this.shipsArray[3].coordPairs.length === 0) {
        while(ship !== 0) {
          this.shipsArray[3].coordPairs.push({positionX, positionY})
          this.board[positionX][positionY] = "H"
          positionX++
          ship--
        }
        return this.board
      }
      if(ship === 5 && this.shipsArray[4].coordPairs.length === 0) {
        while(ship !== 0) {
          this.shipsArray[4].coordPairs.push({positionX, positionY})
          this.board[positionX][positionY] = "H"
          positionX++
          ship--
        }
      }
    }
  } else if(direction === "V") {
    let rowValid =  true;
    for(let j = positionY; j < positionY + ship; j++) {
      if(this.board[positionX][j] !== "o" || positionY + ship > 10 ) {
        rowValid = false
        break
      }
    }
    if(rowValid) {
      if(ship === 1 && this.shipsArray[0].coordPairs.length === 0) {
        while(ship !== 0) {
          this.shipsArray[0].coordPairs.push({positionX,positionY})
          this.board[positionX][positionY] = "V"
          positionY++
          ship--
        }
        return this.board
      }
      if(ship === 2 && this.shipsArray[1].coordPairs.length === 0) {
        while(ship !== 0) {
          this.shipsArray[1].coordPairs.push({positionX,positionY});
          this.board[positionX][positionY] = "V"
          positionY++
          ship--
        }
        return this.board;
      }
      if(ship === 3 && this.shipsArray[2].coordPairs.length === 0) {
        while(ship !== 0) {
          this.shipsArray[2].coordPairs.push({positionX,positionY});
          this.board[positionX][positionY] = "V"
          positionY++
          ship--
        }
        return this.board
      }
      if(ship === 4 && this.shipsArray[3].coordPairs.length === 0) {
        while(ship !== 0) {
          this.shipsArray[3].coordPairs.push({positionX,positionY})
          this.board[positionX][positionY] = "V"
          positionY++
          ship--
        }
        return this.board
      }
      if(ship === 5 && this.shipsArray[4].coordPairs.length === 0 ) {
        while(ship !== 0) {
          this.shipsArray[4].coordPairs.push({positionX,positionY})
          this.board[positionX][positionY] = "V"
          positionY++
          ship--
        }
        return this.board
      }
    }
  }
 }
  shotFired(coordX, coordY) {
   let allowedToHit = false;
   let shipHit = false;
   if(this.board[coordX][coordY] !== "x" && this.board[coordX][coordY] !== "sx") {
    allowedToHit = true;
   }
   this.shipsArray.forEach((singleShip) => {
    for(let i = 0; i < singleShip.coordPairs.length; i++) {
      if( 
        singleShip.coordPairs[i].positionX == coordX &&
        singleShip.coordPairs[i].positionY == coordY
      ) {
        shipHit = true;
        singleShip.ship.hit();
        singleShip.ship.isDestroyed();
        this.checkIfAllDestroyed();
      }
    }
   });
   if(shipHit && allowedToHit) {
    this.board[coordX][coordY] = "sx"
    this.hitCoords.shipHits.push({coordX,coordY})
   }
   if(!shipHit && allowedToHit) {
    this.board[coordX][coordY] = "x";
    this.hitCoords.missedHits.push({coordX,coordY})
   }
  }
   checkIfAllDestroyed() {
    let allSunk = true;
    for(let i = 0; i < this.shipsArray.length; i++) {
      let existingShips = this.shipsArray[i].coordPairs.length;
      if(existingShips > 0) {
        if(this.shipsArray[i].ship.sunk === false) {
          allSunk = false
          break;
        }
      }
    } 
     if(allSunk) {
   this.allSunk = true;
     }
   }
}
