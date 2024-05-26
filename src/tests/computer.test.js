
import Computer from "../objects/computer.js";
import Player from "../objects/player.js";

let computerPlayer = new Computer("AI");
let enemyPlayer = new Player("enemy")

test("check if computer is an instance of an object", () => {
    expect(computerPlayer).toBeInstanceOf(Object)
})

test("check if the computer has an active gameboard", () => {
    expect(computerPlayer.playerBoard.board).toBeInstanceOf(Array)
})

test("check if the random direction returns a tring", () => {
    const possibleDirection = ["V", "H"]
    const randomDirection = computerPlayer.getRandomDirection();
    expect(possibleDirection).toContain(randomDirection)
})

test("The board of the computer should be full of ships placed randomly", () => {
    let computerBoard = computerPlayer.playerBoard.shipsArray
    let checkShip = computerBoard.every((ship) => 
        ship.coordPairs.length > 0
    );
    expect(checkShip).toBeTruthy()
});

test("It should count a miss shot on a player board",() => {
    computerPlayer.computerShot(enemyPlayer);
    let missHits = enemyPlayer.playerBoard.hitCoords.missedHits;
    expect(missHits.length).toBe(1)
})

test("it should sink all the enemy ships", () => {
    enemyPlayer.placePlayerShip(5,0,5,"V");
    let isPlayerSunk = enemyPlayer.playerBoard.allSunk;
    while(!isPlayerSunk) {
        computerPlayer.computerShot(enemyPlayer)
        isPlayerSunk = enemyPlayer.playerBoard.allSunk;
    }
    let counter = computerPlayer.computerPastShots.length
    expect(isPlayerSunk).toBeTruthy();
    expect(counter).toBeLessThanOrEqual(242)
})