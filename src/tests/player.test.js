import Player from "../objects/player";

let player1 = new Player("player1");
let player2 = new Player("player1")

test("player should be an instance of an object", () => {
    expect(player1).toBeInstanceOf(Object)
})

test("Player board should be an array.", () => {
    expect(player1.playerBoard.board).toBeInstanceOf(Array);
})

test("PlayerBoard shoul place ships correctly", () => {
    player1.placePlayerShip(5,0,5,"V");
    expect(player1.playerBoard.board).toStrictEqual(
        [
            ["o","o","o","o","o","V","V","V","V","V"],
            ["o","o","o","o","o","o","o","o","o","o"],
            ["o","o","o","o","o","o","o","o","o","o"],
            ["o","o","o","o","o","o","o","o","o","o"],
            ["o","o","o","o","o","o","o","o","o","o"],
            ["o","o","o","o","o","o","o","o","o","o"],
            ["o","o","o","o","o","o","o","o","o","o"],
            ["o","o","o","o","o","o","o","o","o","o"],
            ["o","o","o","o","o","o","o","o","o","o"],
            ["o","o","o","o","o","o","o","o","o","o"]
            ]
    )
})

test("It should throw attacks into an enemy's board", () => {
     player1.shoot(player2,0,5);
     expect(player2.playerBoard.board[0][5]).not.toEqual("o")
})

test("check if It record the missed hits here, because of a bug probability in computer", () => {
    let missHits = player2.playerBoard.hitCoords.missedHits;
    expect(missHits.length).toBe(1)
})