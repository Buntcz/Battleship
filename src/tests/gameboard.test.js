const gameBoard = require("../objects/gameboard.js")

let newGameboard = new gameBoard;



test("A gameboard is created", () => {
    expect(newGameboard.gameboard).toBeInstanceOf(Array);
})
